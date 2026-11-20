import sys, openpyxl, json, re, unicodedata, collections, os
xlsx, anag, out = sys.argv[1:4]
A=json.load(open(anag,encoding='utf8')); byIstat={r[0]:r for r in A}
norm=lambda s:re.sub(r'[^a-z0-9]','',unicodedata.normalize('NFD',s.lower()).encode('ascii','ignore').decode())
GEN={'protocollo','urp','info','segreteria','protocollogenerale','protocollo.generale','servizisociali','serviziosociali','politichesociali','sociale','servizi.sociali','servizio.sociale','segretariatosociale'}
ws=openpyxl.load_workbook(xlsx,read_only=True).active
it=ws.iter_rows(values_only=True); h=next(it); ix={k:i for i,k in enumerate(h)}
def ent(r):
    g=lambda k:r[ix[k]]
    pec=None; ordn=None
    for i in range(1,6):
        m=g(f'Mail{i}'); t=(g(f'Tipo_Mail{i}') or '').lower()
        if not m: continue
        m=m.strip().lower()
        if not re.fullmatch(r'[a-z0-9._%+\-]+@[a-z0-9.\-]+\.[a-z]{2,}',m): continue
        if t=='pec' and not pec: pec=m
        elif t!='pec' and not ordn and m.split('@')[0] in GEN: ordn=m
    s=(g('Sito_istituzionale') or '').strip()
    s=re.sub(r'^https?://','',s,flags=re.I).rstrip('/')
    if not re.fullmatch(r'[A-Za-z0-9.\-]+\.[a-z]{2,}(/[^\s]*)?',s): s=''
    return [s,pec or '',ordn or ''], str(g('Data_aggiornamento') or '')
bycode={}; byname=collections.defaultdict(list)
for r in it:
    d=r[ix['Denominazione_ente']] or ''
    if r[ix['Codice_Categoria']]!='L6' or not (d.startswith('Comune di') or d.upper()=='ROMA CAPITALE'): continue
    e,agg=ent(r); sc=(sum(bool(x) for x in e),agg)
    c=r[ix['Codice_comune_ISTAT']]
    if c in byIstat and (c not in bycode or sc>bycode[c][1]): bycode[c]=(e,sc)
    byname[norm(d[9:] if d.startswith('Comune di') else d)].append((c,e,sc))
res={}; per_codice=0; per_nome=0; scartati=[]
for c,r in byIstat.items():
    slug=r[6]
    if c in bycode: e=bycode[c][0]; per_codice+=1
    else:
        cand=byname.get(norm(r[1]),[])
        if len(cand)!=1: continue
        e=cand[0][1]
        m=re.search(r'\.([a-z]{2})\.it\b',e[0]) 
        if m and m.group(1)!=r[2].lower(): scartati.append(r[1:3]); continue
        per_nome+=1
    if any(e): res[slug]=e
print('per codice',per_codice,'per nome',per_nome,'scartati',len(scartati),scartati[:8],'totale',len(res),'senza riferimenti',len(A)-len(res))
json.dump(res,open(out,'w',encoding='utf8'),ensure_ascii=False,separators=(',',':'),sort_keys=True)
print(os.path.getsize(out), 'con sito',sum(1 for e in res.values() if e[0]),'pec',sum(1 for e in res.values() if e[1]),'email gen',sum(1 for e in res.values() if e[2]))
