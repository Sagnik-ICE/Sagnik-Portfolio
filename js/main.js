document.addEventListener('DOMContentLoaded',()=>{
  const dataPath = 'data/profile.json'
  fetch(dataPath).then(r=>r.json()).then(data=>{
    document.getElementById('name').textContent = data.name
    document.getElementById('title').textContent = data.title
    document.getElementById('heroName').textContent = data.name
    document.getElementById('heroBio').textContent = data.summary
    document.getElementById('aboutText').textContent = data.about
    document.getElementById('emailLink').textContent = data.email
    document.getElementById('emailLink').href = `mailto:${data.email}`
    document.getElementById('contactEmail').textContent = data.email
    document.getElementById('contactEmail').href = `mailto:${data.email}`
    document.getElementById('location').textContent = data.location
    document.getElementById('footerYear').textContent = new Date().getFullYear()
    document.getElementById('footerName').textContent = data.name
    if(data.resume) document.getElementById('resumeLink').href = data.resume

    // Skills
    const skillsWrap = document.getElementById('skillsWrap')
    (data.skills||[]).forEach(s=>{
      const c = document.createElement('span'); c.className='chip'; c.textContent=s; skillsWrap.appendChild(c)
    })

    // Projects
    const projectsGrid = document.getElementById('projectsGrid')
    ;(data.projects||[]).forEach(p=>{
      const el = document.createElement('div'); el.className='project'
      const h = document.createElement('h4'); h.textContent = p.title
      const d = document.createElement('p'); d.textContent = p.description
      const links = document.createElement('div')
      if(p.link){ const a=document.createElement('a'); a.href=p.link; a.textContent='Live'; a.target='_blank'; a.style.marginRight='0.5rem'; links.appendChild(a)}
      if(p.repo){ const a=document.createElement('a'); a.href=p.repo; a.textContent='Repo'; a.target='_blank'; links.appendChild(a)}
      el.appendChild(h); el.appendChild(d); el.appendChild(links); projectsGrid.appendChild(el)
    })

    // Papers
    const papersList = document.getElementById('papersList')
    ;(data.publications||[]).forEach(pub=>{
      const li = document.createElement('li')
      const a = document.createElement('a'); a.textContent = `${pub.title} — ${pub.venue} (${pub.year})`; a.href = pub.link || '#'; a.target='_blank'
      li.appendChild(a); papersList.appendChild(li)
    })

    // Social links
    const social = document.getElementById('socialLinks')
    ;(data.social||[]).forEach(s=>{
      const a = document.createElement('a'); a.href = s.link; a.textContent = s.label; a.target = '_blank'; social.appendChild(a)
    })
  }).catch(err=>{console.error('Failed loading profile.json',err)})

  // Mobile menu
  const menu = document.getElementById('menuToggle')
  menu.addEventListener('click',()=>{
    const nav = document.querySelector('.nav')
    if(nav.style.display==='flex'){nav.style.display='none'}else{nav.style.display='flex'}
  })
})
