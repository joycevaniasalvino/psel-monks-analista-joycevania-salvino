import Card from "./components/Card"
import Header from "./components/Header"
import Tag from "./components/Tag"

import { useEffect, useState } from 'react';
import { fetchDados } from './services/apiService';
import { DadosApi } from './types';

function App() {
  const [dados, setDados] = useState<DadosApi[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchDados()
      .then((data) => {
        setDados(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Erro ao carregar dados:', error);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Carregando...</p>;

  return (
    <body className="bg-[#EAE8E4] text-black">
      {dados.map((item) => (
        <div key={item.id}>
          <header className="bg-[#2D2D2D] text-white pl-16 flex justify-between rounded-b-2xl h-[480px]">
            <div className=" flex flex-col justify-between pt-5">
              <Header imgLogo={item.imgLogo} linksHeader={item.linksHeader} />
              <div className="mt-10">
                <h1 className="text-5xl font-bold">Lorem ipsum dolor sit amet consectetur</h1>
                <p className="text-2xl font-inter mt-5">Lorem ipsum dolor sit amet consectetur. Semper orci adipiscing faucibus sit scelerisque quis commodo aenean viverra</p>
              </div>
              <div className="flex justify-center mb-5">
                <img src={item.imgScroll} alt="scroll" className="h-20" />
              </div>
            </div>
            <img className="h-max" src={item.imgPrincipal} alt="Logo Monks" />
          </header>

          <section className="flex flex-col m-16">
            <h2 className="text-4xl">{item.tituloSecao2}</h2>
            <p className="text-2xl mt-2 mb-10">{item.textoSecao2}</p>
            <Card cards={item.cards} />
          </section>

          <section className="flex m-16 gap-x-6">
            <div className="flex flex-col gap-y-6 justify-between">
              <div className="ml-3">
                <h2 className="text-5xl">{item.tituloSecao3}</h2>
                <p className="text-xl pt-2">{item.textoSecao3}</p>
              </div>
              <img className="h-[525px]" src={item.img1} alt="img 1" />
            </div>
            <div className="flex flex-col gap-y-6">
              <img className="h-[346.5px]" src={item.img2} alt="img 2" />
              <img className="h-[346.5px]" src={item.img3} alt="img 3" />
            </div>
          </section>

          <section className="bg-[#3C0C60] text-white">
            <h2>Lorem ipsum dolor sit amet consectetur</h2>
            <p>Lorem ipsum dolor sit amet consectetur. Semper orci adipiscing faucibus sit scelerisque quis commodo aenean viverra</p>
          </section>

          <section>
            <h2>Lorem ipsum dolor sit amet consectetur</h2>
            <Tag />
          </section>

          <section>
            {/* <Card /> */}
          </section>

          <section className="bg-[#2D2D2D] py-10">
            <form action="" className="bg-[#EAE8E4]">dfdef</form>
          </section>

          <footer className="bg-[#2D2D2D] text-white">
            <div>
              links sociais
            </div>
            <div>
              links
            </div>
          </footer>
        </div>
      ))}
    </body>

  )
}

export default App
