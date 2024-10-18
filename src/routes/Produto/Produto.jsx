import { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'



const Produto = () => {

  let {id} = useParams();
  const navigate = useNavigate();
  const [produto,setProduto]=useState({
    id,
    nome:"",
    imagem:""
  })
  const handleChange = (e) =>{
    setProduto({...produto,[e.target.name]:e.target.value};)
  }
  const handleSubmit=(e)=>{
    e.preventDefault();
    fetch(`http://localhost:5000/produto/${id ? id : ''}`, {
      method:"post",
      headers:{
        'Content-Type': 'application/json',
      },
      body:JSON.stringify(produto)
    }).then(()=>{
      navigate("/");
    })
  }

  return (
    <section className='produto'>
      <h1>Cadastrar Produto</h1>
      <form onSubmit={handleSubmit}>
        <p>
          <label htmlFor="nome">Nome do Produto</label>
          <input type="text" name="nome" id="nome" value={Produto.nome} onChange={{handleChange}}/>
        </p>

        <p>
          <label htmlFor="imagem">Imagem do Produto</label>
          <input type="url" name="imagem" id="imagem" value={produto.imagem} onChange={{handleChange}}/>
        </p>
        <button type="submit">Cadastrar</button>
      </form>
    </section>
  )
}

export default Produto
