function Features(){
    return(
<div style={{display:'flex',justifyContent:'space-around',padding:'40px',background:'#404040',color:'white'}}>

    <div style={{width:'25%',background:'#925c15',padding:'20px',borderRadius:'12px',textAlign:'center'}}>
        <span style={{fontSize:'2rem'}}>📑</span>
        <h3>Controle de Tarefas</h3>
        <p>Gerencie suas tarefas diárias com facilidade.</p>
    </div>

    <div style={{width:'25%',background:'#925c15',padding:'20px',borderRadius:'12px',textAlign:'center'}}>
        <span style={{fontSize:'2rem'}}>⏰</span>
        <h3>Gestão de Tempo</h3>
        <p>Organize seu tempo e aumente sua produtividade.</p>
    </div>

    <div style={{width:'25%',background:'#925c15',padding:'20px',borderRadius:'12px',textAlign:'center'}}>
        <span style={{fontSize: '2rem'}}>🎯</span>
        <h3>Metas Inteligentes</h3>
        <p>Acompanhe seus objetivos e evolua constantemente.</p>
    </div>

</div>
    );
}

export default Features;