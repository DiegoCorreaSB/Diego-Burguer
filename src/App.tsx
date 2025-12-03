import humburguerPropaganda from '../public/Hamburguers/hamburguer-propaganda.jpg'
import './App.css'
import './index.css'

function App() {

  return (
    <>
      <main>
        <nav>
          <section id='logo'>
            <h1>🍔Seu nome aqui</h1>
          </section>

          <section id="opcoes">
            <a href="#">Início</a>
            <a href="#">Hambúrgueres</a>
            <a href="#">Bebidas</a>
            <a href="#">Contato</a>
          </section>

          <section id="btn-peca-agora">
            <a href="#">Peça Agora 📲</a>
          </section>
        </nav>

        <article id='container-propaganda'>
          <section id="texto-propaganda">
            <div className='texto-principal'>
              <h2>O melhor <br /> Hambúrguer da região</h2>
              <p className='texto-descricao'>Experimente nossos hambúrgueres artesanais feitos com ingredientes frescos e de alta qualidade. Sinta o sabor único que só nós oferecemos!</p>
            </div>

            <section id="btn-cardapio">
              <a href="#">Veja nosso cardápio</a>
            </section>

            <section id='informacoes'>
              <div className='btn-infos'>
                <h3>1.600+</h3>
                <p>Vendas</p>
              </div>
              <div className='btn-infos'>
                <h3>40 - 60 min</h3>
                <p>Tempo de Entrega</p>
              </div>
              <div className='btn-infos'>
                <h3>4.89 ⭐</h3>
                <p>em Avaliações</p>
              </div>
            </section>

          </section>
          <section id="imagem-propaganda">
            <img src={humburguerPropaganda} alt="Hambúrguer suculento com queijo derretido, alface, tomate e cebola roxa, servido em um pão macio com gergelim." />
          </section>
        </article>

      </main>
    </>
  )
}

export default App
