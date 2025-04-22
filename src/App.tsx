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
          <header className="bg-[#2D2D2D] text-white rounded-b-2xl h-[480px] flex justify-center">
            <div className="flex justify-between max-w-[1366px] pl-16">
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
            </div>
          </header>

          <section className="flex flex-col justify-center items-center">
            <div className="max-w-[1366px] p-16">
              <div>
                <h2 className="text-4xl">{item.tituloSecao2}</h2>
                <p className="text-2xl mt-2 mb-10">{item.textoSecao2}</p>
              </div>
              <Card cards={item.cards} btn={false} />
            </div>
          </section>

          <section className="flex gap-x-6 justify-center">
            <div className="max-w-[1366px] flex flex-row px-16 w-full justify-between">
              <div className="flex flex-col gap-y-6 justify-between">
                <div className="ml-3 w-[591px]">
                  <h2 className="text-5xl">{item.tituloSecao3}</h2>
                  <p className="text-xl pt-2">{item.textoSecao3}</p>
                </div>
                <img className="h-[525px] w-[591px]" src={item.img1} alt="img 1" />
              </div>
              <div className="flex flex-col gap-y-6">
                <img className="h-[346.5px] w-[591px]" src={item.img2} alt="img 2" />
                <img className="h-[346.5px] w-[591px]" src={item.img3} alt="img 3" />
              </div>
            </div>
          </section>

          <section className="m-auto px-16 my-16 max-w-[1366px]">
            <div className="bg-[#3C0C60] text-white p-7 rounded-xl max-w-[1366px] w-full">
              <div className="flex gap-x-10">
                <div className="flex flex-col gap-y-2">
                  <h2 className="text-5xl">Lorem ipsum dolor sit amet consectetur</h2>
                  <p className="text-xl">Lorem ipsum dolor sit amet consectetur. Semper orci adipiscing faucibus sit scelerisque quis commodo aenean viverra</p>
                </div>
                <div className="flex flex-col gap-y-2">
                  <img className="h-16 w-[217.13]" src={item.imgAppleStore} alt="Img link Apple Store" />
                  <img className="h-16 w-[217.13]" src={item.imgPlayStore} alt="Img link Play Store" />
                </div>
              </div>
            </div>
          </section>

          <section className="m-auto px-16 my-16 max-w-[1366px]">
            <h2 className="text-5xl mb-10">Lorem ipsum dolor sit amet consectetur</h2>
            <Tag tags={item.tags} />
          </section>

          <section className="flex flex-col justify-center items-center">
            <div className="max-w-[1366px] px-16 mb-16">
              <Card cards={item.cards2} btn={true} />
            </div>
          </section>

          <div className="bg-[#2D2D2D] py-10">
            <div className="max-w-[1366px] px-16 flex justify-between">
              <div className="m-auto">
                <img className="h-[300.87px] w-[314.55px]" src={item.imgForm} alt="Img Form" />
              </div>
              <section className="bg-[#EAE8E4] rounded-3xl p-8 max-w-3xl shadow-md ">
                <h2 className="text-2xl md:text-3xl font-semibold  text-gray-800 mb-2">
                  Lorem ipsum dolor sit amet consectetur
                </h2>
                <p className=" text-gray-600 mb-6">
                  Lorem ipsum dolor sit amet consectetur. Semper orci adipiscing faucibus sit scelerisque
                </p>
                <p className="text-sm italic text-gray-500  mb-6">
                  *Lorem ipsum dolor sit amet consectetur.
                </p>

                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <input type="text" placeholder="Categoria*" className="p-2 rounded w-ful bg-[#FFFFFF]" />
                    <input type="text" placeholder="Categoria*" className="p-2 rounded w-full bg-[#FFFFFF]" />
                    <input type="text" placeholder="Categoria" className="p-2 rounded w-full bg-[#FFFFFF]" />
                    <input type="text" placeholder="Categoria" className="p-2 rounded w-full bg-[#FFFFFF]" />
                  </div>

                  <div className="flex flex-wrap items-center justify-center gap-2 text-center">
                    <label className="text-sm font-medium mr-2">Verificação de segurança</label>
                    <div className="bg-[#DFDCD5] px-6 py-1 rounded-lg">
                      <span className="text-purple-700 font-semibold px-2 py-1 rounded">427</span>
                      <span className="text-lg font-bold">+</span>
                      <span className="text-purple-700 font-semibold px-2 py-1 rounded">628</span>
                    </div>
                    <span className="text-lg font-bold">=</span>
                    <input type="text" placeholder="Resultado*" className="p-2 rounded w-32 bg-[#FFFFFF] " />
                  </div>

                  <div className="text-center">
                    <button type="submit" className="bg-[#DFBBFE] text-[#2D2D2D] font-bold px-6 py-2 rounded">
                      Lorem ipsum
                    </button>
                  </div>
                </form>
              </section>
            </div>

            <hr className="w-[1206px] m-auto mt-24 text-[#DFBBFE]" />

            <footer className="bg-[#2D2D2D] text-white pt-10">
              <div className="flex justify-center gap-x-10">
                <a href={item.instagram}><svg className="h-8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fill-rule="evenodd" clip-rule="evenodd" d="M12 18C15.3137 18 18 15.3137 18 12C18 8.68629 15.3137 6 12 6C8.68629 6 6 8.68629 6 12C6 15.3137 8.68629 18 12 18ZM12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16Z" fill="#ffffff"></path> <path d="M18 5C17.4477 5 17 5.44772 17 6C17 6.55228 17.4477 7 18 7C18.5523 7 19 6.55228 19 6C19 5.44772 18.5523 5 18 5Z" fill="#ffffff"></path> <path fill-rule="evenodd" clip-rule="evenodd" d="M1.65396 4.27606C1 5.55953 1 7.23969 1 10.6V13.4C1 16.7603 1 18.4405 1.65396 19.7239C2.2292 20.8529 3.14708 21.7708 4.27606 22.346C5.55953 23 7.23969 23 10.6 23H13.4C16.7603 23 18.4405 23 19.7239 22.346C20.8529 21.7708 21.7708 20.8529 22.346 19.7239C23 18.4405 23 16.7603 23 13.4V10.6C23 7.23969 23 5.55953 22.346 4.27606C21.7708 3.14708 20.8529 2.2292 19.7239 1.65396C18.4405 1 16.7603 1 13.4 1H10.6C7.23969 1 5.55953 1 4.27606 1.65396C3.14708 2.2292 2.2292 3.14708 1.65396 4.27606ZM13.4 3H10.6C8.88684 3 7.72225 3.00156 6.82208 3.0751C5.94524 3.14674 5.49684 3.27659 5.18404 3.43597C4.43139 3.81947 3.81947 4.43139 3.43597 5.18404C3.27659 5.49684 3.14674 5.94524 3.0751 6.82208C3.00156 7.72225 3 8.88684 3 10.6V13.4C3 15.1132 3.00156 16.2777 3.0751 17.1779C3.14674 18.0548 3.27659 18.5032 3.43597 18.816C3.81947 19.5686 4.43139 20.1805 5.18404 20.564C5.49684 20.7234 5.94524 20.8533 6.82208 20.9249C7.72225 20.9984 8.88684 21 10.6 21H13.4C15.1132 21 16.2777 20.9984 17.1779 20.9249C18.0548 20.8533 18.5032 20.7234 18.816 20.564C19.5686 20.1805 20.1805 19.5686 20.564 18.816C20.7234 18.5032 20.8533 18.0548 20.9249 17.1779C20.9984 16.2777 21 15.1132 21 13.4V10.6C21 8.88684 20.9984 7.72225 20.9249 6.82208C20.8533 5.94524 20.7234 5.49684 20.564 5.18404C20.1805 4.43139 19.5686 3.81947 18.816 3.43597C18.5032 3.27659 18.0548 3.14674 17.1779 3.0751C16.2777 3.00156 15.1132 3 13.4 3Z" fill="#ffffff"></path> </g></svg></a>
                <a href={item.whatsapp}><svg className="h-8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fill-rule="evenodd" clip-rule="evenodd" d="M3.50002 12C3.50002 7.30558 7.3056 3.5 12 3.5C16.6944 3.5 20.5 7.30558 20.5 12C20.5 16.6944 16.6944 20.5 12 20.5C10.3278 20.5 8.77127 20.0182 7.45798 19.1861C7.21357 19.0313 6.91408 18.9899 6.63684 19.0726L3.75769 19.9319L4.84173 17.3953C4.96986 17.0955 4.94379 16.7521 4.77187 16.4751C3.9657 15.176 3.50002 13.6439 3.50002 12ZM12 1.5C6.20103 1.5 1.50002 6.20101 1.50002 12C1.50002 13.8381 1.97316 15.5683 2.80465 17.0727L1.08047 21.107C0.928048 21.4637 0.99561 21.8763 1.25382 22.1657C1.51203 22.4552 1.91432 22.5692 2.28599 22.4582L6.78541 21.1155C8.32245 21.9965 10.1037 22.5 12 22.5C17.799 22.5 22.5 17.799 22.5 12C22.5 6.20101 17.799 1.5 12 1.5ZM14.2925 14.1824L12.9783 15.1081C12.3628 14.7575 11.6823 14.2681 10.9997 13.5855C10.2901 12.8759 9.76402 12.1433 9.37612 11.4713L10.2113 10.7624C10.5697 10.4582 10.6678 9.94533 10.447 9.53028L9.38284 7.53028C9.23954 7.26097 8.98116 7.0718 8.68115 7.01654C8.38113 6.96129 8.07231 7.046 7.84247 7.24659L7.52696 7.52195C6.76823 8.18414 6.3195 9.2723 6.69141 10.3741C7.07698 11.5163 7.89983 13.314 9.58552 14.9997C11.3991 16.8133 13.2413 17.5275 14.3186 17.8049C15.1866 18.0283 16.008 17.7288 16.5868 17.2572L17.1783 16.7752C17.4313 16.5691 17.5678 16.2524 17.544 15.9269C17.5201 15.6014 17.3389 15.308 17.0585 15.1409L15.3802 14.1409C15.0412 13.939 14.6152 13.9552 14.2925 14.1824Z" fill="#ffffff"></path> </g></svg></a>
                <a href={item.twitter}><svg className="h-8" viewBox="0 -2 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>twitter [#ffffff154]</title> <desc>Created with Sketch.</desc> <defs> </defs> <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"> <g id="Dribbble-Light-Preview" transform="translate(-60.000000, -7521.000000)" fill="#ffffff"> <g id="icons" transform="translate(56.000000, 160.000000)"> <path d="M10.29,7377 C17.837,7377 21.965,7370.84365 21.965,7365.50546 C21.965,7365.33021 21.965,7365.15595 21.953,7364.98267 C22.756,7364.41163 23.449,7363.70276 24,7362.8915 C23.252,7363.21837 22.457,7363.433 21.644,7363.52751 C22.5,7363.02244 23.141,7362.2289 23.448,7361.2926 C22.642,7361.76321 21.761,7362.095 20.842,7362.27321 C19.288,7360.64674 16.689,7360.56798 15.036,7362.09796 C13.971,7363.08447 13.518,7364.55538 13.849,7365.95835 C10.55,7365.79492 7.476,7364.261 5.392,7361.73762 C4.303,7363.58363 4.86,7365.94457 6.663,7367.12996 C6.01,7367.11125 5.371,7366.93797 4.8,7366.62489 L4.8,7366.67608 C4.801,7368.5989 6.178,7370.2549 8.092,7370.63591 C7.488,7370.79836 6.854,7370.82199 6.24,7370.70483 C6.777,7372.35099 8.318,7373.47829 10.073,7373.51078 C8.62,7374.63513 6.825,7375.24554 4.977,7375.24358 C4.651,7375.24259 4.325,7375.22388 4,7375.18549 C5.877,7376.37088 8.06,7377 10.29,7376.99705" id="twitter-[#ffffff154]"> </path> </g> </g> </g> </g></svg></a>
                <a href={item.facebook}><svg className="h-8" viewBox="-5 0 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>facebook [#176]</title> <desc>Created with Sketch.</desc> <defs> </defs> <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"> <g id="Dribbble-Light-Preview" transform="translate(-385.000000, -7399.000000)" fill="#ffffff"> <g id="icons" transform="translate(56.000000, 160.000000)"> <path d="M335.821282,7259 L335.821282,7250 L338.553693,7250 L339,7246 L335.821282,7246 L335.821282,7244.052 C335.821282,7243.022 335.847593,7242 337.286884,7242 L338.744689,7242 L338.744689,7239.14 C338.744689,7239.097 337.492497,7239 336.225687,7239 C333.580004,7239 331.923407,7240.657 331.923407,7243.7 L331.923407,7246 L329,7246 L329,7250 L331.923407,7250 L331.923407,7259 L335.821282,7259 Z" id="facebook-[#176]"> </path> </g> </g> </g> </g></svg></a>

              </div>
              <div className="flex justify-center items-center mt-10 flex-col">
                <p>{item.fraseRodape}</p>
                <div className="flex gap-x-10 mt-2">
                  <a href={item.link1}>Lorem ipsum</a>
                  <a href={item.link2}>Lorem ipsum</a>
                  <a href={item.link3}>Lorem ipsum</a>
                  <a href={item.link4}>Lorem ipsum</a>
                </div>
              </div>
            </footer>
          </div>
        </div>
      ))}
    </body>

  )
}

export default App
