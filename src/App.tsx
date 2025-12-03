import humburguerPropaganda from '../public/Hamburguers/hamburguer-propaganda.jpg'
import xbacon from '../public/Hamburguers/xbacon.jpeg'
import xbaconDuplo from '../public/Hamburguers/xbacon-duplo.jpeg'
import xsalada from '../public/Hamburguers/xsalada.jpeg'
import vegano from '../public/Hamburguers/hamburguer-vegano.jpeg'
import aguacomgas from '../public/bebidas/agua-comgas.jpg'
import aguasemgas from '../public/bebidas/agua-semgas.jpg'
import cocalata from '../public/bebidas/coca-lata.jpg'
import cocapet from '../public/bebidas/coca-doislitros.jpg'
import antarticalata from '../public/bebidas/antartica-lata.jpg'
import antarticapet from '../public/bebidas/antartica-doislitros.jpg'
import spritelata from '../public/bebidas/sprite-lata.jpg'


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

        <article id='container-hamburguer'>
          <h2>Nossos Hambúrgueres</h2>

          <section id='lista-hamburguer'>
            <div className="card-hamburguer">
              <div>
                <img src={xbacon} alt="Hambúrguer suculento com queijo derretido e muito bacon, servido em um pão macio com gergelim." />
              </div>
              <div className='descricao-hamburguer'>
                <h3>X - Bacon</h3>
                <p className="descricao-card-hamburguer">O clássico hambúrguer com queijo derretido e muito bacon crocante, servido em um pão macio com gergelim.</p>
                <section className="preco">
                  <a href="#">R$ 18,50</a>
                </section>
              </div>
            </div>
            <div className="card-hamburguer">
              <div>
                <img src={xbaconDuplo} alt="Hambúrguer suculento com queijo derretido e muito bacon, servido em um pão macio com gergelim com tudo em dobro." />
              </div>
              <div className='descricao-hamburguer'>
                <h3>X - Bacon Duplo</h3>
                <p className="descricao-card-hamburguer">Para os amantes de bacon, nosso X-Bacon Duplo traz o dobro de sabor com dois hambúrgueres suculentos, queijo derretido e muito bacon crocante, servido em um pão macio com gergelim.</p>
                <section className="preco">
                  <a href="#">R$ 22,00</a>
                </section>
              </div>
            </div>
            <div className="card-hamburguer">
              <div>
                <img src={xsalada} alt="Hambúrguer suculento com queijo derretido, alface, tomate e cebola roxa, servido em um pão macio com gergelim." />
              </div>
              <div className='descricao-hamburguer'>
                <h3>X - Salada</h3>
                <p className="descricao-card-hamburguer">Hambúrguer suculento com queijo derretido, alface fresca, tomate suculento e cebola roxa crocante, servido em um pão macio com gergelim.</p>
                <section className="preco">
                  <a href="#">R$ 16,00</a>
                </section>
              </div>
            </div>
            <div className="card-hamburguer">
              <div>
                <img src={vegano} alt="Hambúrguer vegano feito com ingredientes frescos, servido em um pão macio com gergelim." />
              </div>
              <div className='descricao-hamburguer'>
                <h3>Vegano</h3>
                <p className="descricao-card-hamburguer">Nosso hambúrguer vegano é feito com ingredientes frescos e saborosos, oferecendo uma opção deliciosa e saudável para todos os gostos, servido em um pão macio com gergelim.</p>
                <section className="preco">
                  <a href="#">R$ 25,00</a>
                </section>
              </div>
            </div>
          </section>
        </article>

        <article id="container-bebidas">
          <h2>Nossas Bebidas</h2>
          <section id='lista-bebida'>
            <div className="card-bebida">
              <div><img src={cocapet} alt="Coca Cola 2 Litros" /></div>
              <div className='descricao-bebida'>
                <h3>Coca Cola 2 Litros</h3>
                <section className="preco">
                  <a href="#">R$ 18,50</a>
                </section>
              </div>
            </div>

            <div className="card-bebida">
              <div><img src={cocalata} alt="Coca Cola Lata" /></div>
              <div className='descricao-bebida'>
                <h3>Coca Cola Lata 350ml</h3>
                <section className="preco">
                  <a href="#">R$ 18,50</a>
                </section>
              </div>
            </div>

            <div className="card-bebida">
              <div><img src={antarticapet} alt="Guaraná Antartica 2 Litros" /></div>
              <div className='descricao-bebida'>
                <h3>Guaraná Antartica 2 Litrosl</h3>
                <section className="preco">
                  <a href="#">R$ 18,50</a>
                </section>
              </div>
            </div>

            <div className="card-bebida">
              <div><img src={antarticalata} alt="Guaraná Antartica Lata" /></div>
              <div className='descricao-bebida'>
                <h3>Guaraná Antartica Lata 350ml</h3>
                <section className="preco">
                  <a href="#">R$ 18,50</a>
                </section>
              </div>
            </div>

            <div className="card-bebida">
              <div><img src={spritelata} alt="Sprite Lata 350ml" /></div>
              <div className='descricao-bebida'>
                <h3>Sprite Lata 350ml</h3>
                <section className="preco">
                  <a href="#">R$ 18,50</a>
                </section>
              </div>
            </div>

            <div className="card-bebida">
              <div><img src={aguasemgas} alt="Água sem gás 500ml" /></div>
              <div className='descricao-bebida'>
                <h3>Água sem gás</h3>
                <section className="preco">
                  <a href="#">R$ 18,50</a>
                </section>
              </div>
            </div>

            <div className="card-bebida">
              <div><img src={aguacomgas} alt="Água com gás 500ml" /></div>
              <div className='descricao-bebida'>
                <h3>Água com gás</h3>
                <section className="preco">
                  <a href="#">R$ 18,50</a>
                </section>
              </div>
            </div>

          </section>
        </article>

      </main>
    </>
  )
}

export default App
