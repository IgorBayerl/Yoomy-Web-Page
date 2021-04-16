import Head from 'next/head'


export default function Home() {
  return (
<>
  <title>Page title</title>
  <meta charSet="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
  <meta name="description" content />
  <meta name="author" content />
  <link href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;700&display=swap" rel="stylesheet" />
  <link rel="stylesheet" href="css/tailwind/tailwind.min.css" />
  <link rel="icon" type="image/png" sizes="16x16" href="favicon-tailwind.png" />
  <div className> 
    <section className="py-8">
      {/* trocar isso depois, esta dando problema */}
      <div className="lg:container-fluid lg:px-16 px-4 mx-auto">
        <nav>
          <div className="flex justify-between items-center">
            <a className="text-lg font-medium" href="#"><img src="https://static.shuffle.dev/uploads/files/4e/4e674a367524096fb31645c4e9f8ad19b46d769f/Grupo-10532.png" alt width={100} /></a>
            <div className="lg:hidden">
              <button className="navbar-burger flex items-center p-3 hover:bg-gray-50 rounded">
                <svg className="block h-4 w-4" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <title>Mobile menu</title>
                  <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
                </svg>
              </button>
            </div>
            <ul className="hidden lg:flex lg:ml-auto lg:mr-12 lg:items-center lg:w-auto lg:space-x-12">
              <li><a className="font-medium text-sm text-gray-500 hover:text-yellow-400" href="#">Comida</a></li>
              <li><a className="font-medium text-sm text-gray-500 hover:text-yellow-400" href="#">Empreendedorismo</a></li>
              <li><a className="font-medium text-sm text-gray-500 hover:text-yellow-400" href="#">Inovação e tecnologia </a></li>
              <li><a className="font-medium text-sm text-gray-500 hover:text-yellow-400" href="#">Guia local</a></li>
              <li><a className="font-medium text-sm text-gray-500 hover:text-yellow-400" href="#">Outros</a></li>
            </ul>
            <div className="hidden lg:block"><a className="inline-block py-3 px-8 text-sm text-white font-medium leading-normal bg-yellow-400 hover:bg-yellow-300 rounded transition duration-200" href="#">Conheça a Yoomy</a></div>
          </div>
        </nav>
      </div>
      <div className="hidden navbar-menu relative z-50">
        <div className="navbar-backdrop fixed inset-0 bg-gray-800 opacity-25" />
        <nav className="fixed top-0 left-0 bottom-0 flex flex-col w-5/6 max-w-sm py-6 px-6 bg-white border-r overflow-y-auto">
          <div className="flex items-center mb-8">
            <a className="mr-auto text-2xl font-medium leading-none" href="#"><img src="https://static.shuffle.dev/uploads/files/4e/4e674a367524096fb31645c4e9f8ad19b46d769f/Grupo-10532.png" alt width={100} /></a>
            <button className="navbar-close">
              <svg className="h-6 w-6 text-gray-500 cursor-pointer hover:text-gray-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          <div>
            <ul>
              <li className="mb-1"><a className="block p-4 text-sm font-medium text-gray-900 hover:bg-gray-50 rounded" href="#">Comida</a></li>
              <li className="mb-1"><a className="block p-4 text-sm font-medium text-gray-900 hover:bg-gray-50 rounded" href="#">Empreendedorismo</a></li>
              <li className="mb-1"><a className="block p-4 text-sm font-medium text-gray-900 hover:bg-gray-50 rounded" href="#">Inovação e tecnologia </a></li>
              <li className="mb-1"><a className="block p-4 text-sm font-medium text-gray-900 hover:bg-gray-50 rounded" href="#">Guia local</a></li>
              <li className="mb-1"><a className="block p-4 text-sm font-medium text-gray-900 hover:bg-gray-50 rounded" href="#">outros</a></li>
            </ul>
          </div>
          <div className="mt-auto">
            <div className="pt-6"><a className="block py-3 text-center text-sm text-white leading-normal bg-yellow-400 hover:bg-yellow-300 font-medium rounded transition duration-200" href="#">Conheça a Yoomy</a></div>
            <p className="mt-6 mb-4 text-sm text-center text-gray-500">
              <span>© 2021 All rights reserved.</span>
            </p>
          </div>
        </nav>
      </div>
    </section>
    <section>
      <div className="bg-yellow-400 pt-12 lg:pt-20 pb-20">
        <div className="mt-8 container mx-auto px-4">
          <div className="flex flex-wrap -mx-4 cursor-pointer">
            <div className="hidden lg:block w-full lg:w-1/2 px-4 flex items-center justify-center">
              <div className="relative" style={{zIndex: 0}}><img className="h-128 w-full max-w-lg object-cover rounded-2xl" src="https://static.shuffle.dev/uploads/files/08/0879150e9ada17d4efef9aa095f20f794faa7de6/pleased-woman-with-dark-hair-chilling-with-cup-coffee-cozy-cafe-winter-indoor-portrait-amazing-lady-knitted-yellow-cardigan-resting-restaurant-enjoying-ice-cream-1.jpg" alt /></div>
            </div>
            <div className="lg:hidden  w-full lg:w-1/2 px-4 flex items-center justify-center">
              <div className="relative" style={{zIndex: 0}}><img className="w-full max-w-lg object-cover rounded-2xl" src="https://static.shuffle.dev/uploads/files/08/0879150e9ada17d4efef9aa095f20f794faa7de6/pleased-woman-with-dark-hair-chilling-with-cup-coffee-cozy-cafe-winter-indoor-portrait-amazing-lady-knitted-yellow-cardigan-resting-restaurant-enjoying-ice-cream-1.jpg" alt /></div>
            </div>
            <div className="w-full lg:w-1/2 px-4 mb-12 md:mb-20 lg:mb-0 flex items-center">
              <div className="w-full text-left">
                <div className="max-w-lg mx-auto lg:mx-0 mt-8">
                  <a className="text-white font-bold bg-green-600 leading-loose rounded px-3 py-3">Vida e Hobbie</a>
                  <h2 className="mb-3 mt-3 text-4xl lg:text-5xl font-bold font-heading">
                    <span className="text-white">Pessoas são mais felizes com</span>
                    <span className="text-green-600"> yoomy</span>
                  </h2>
                  <p className="mb-6 text-white leading-loose">As pessoas que usam a yoomy encontram uma felicidade incrível, conseguem encontrar os restaurantes que melhor se encaixam</p>
                  <div><a className="inline-block mb-3 lg:mb-0 lg:mr-3 w-full lg:w-auto py-2 px-6 leading-loose bg-green-600  text-white font-semibold rounded-xl rounded-t-xl">Julia Almeida</a><a className="inline-block w-full lg:w-auto py-2 px-6 leading-loose font-semibold bg-white  rounded-xl rounded-t-xl text-green-600">27/03/2021</a></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section className="pt-10">
      <div className="container px-4 mx-auto">
        <div className="flex flex-wrap -mx-4 -mb-4">
          <div className="blocks w-full">
            <h2 className="mb-8 px-4 mt-2 text-4xl font-bold font-heading text-green-600">Recentes</h2>
          </div>			
          <div className="w-full lg:w-1/2 px-4">
            <div className="flex h-96 bg-gray-100 rounded-t-lg cursor-pointer"><img className="w-full h-full object-cover rounded-t-lg" src="https://static.shuffle.dev/uploads/files/fb/fbaf56534de36adf7161c70c61794f293b314223/young-pretty-woman-eating-pizza-at-pizza-bar.jpg" alt /></div>
            <div className="bg-gray-100 mb-12 rounded-b-lg cursor-pointer">
              <a className="ml-4 text-white font-bold bg-yellow-400 leading-loose rounded px-3 py-3">Vida e Hobbie</a>
              <h2 className="pl-4 mb-2 mt-2 text-3xl text-gray-500 font-bold font-heading">A vida é melhor com amigos e familiares</h2>
              <p className="pl-4 mb-4 text-lg text-gray-400">As pessoas que usam a yoomy encontram uma felicidade incrível, conseguem encontrar os restaurantes que melhor...</p>
              <a className="pl-4 inline-block mb-3 lg:mb-0 w-full lg:w-auto py-2 leading-loose text-gray-400 font-semibold rounded-xl rounded-t-xl">Julia Almeida 27/03/2021</a>
            </div>
          </div>
          <div className="hidden lg:inline-flex ml-2 flex flex-wrap -mx-4 lg:w-1/2">
            <div className="flex rounded bg-gray-100 cursor-pointer" style={{height: '14.5rem'}}>
              <div className="lg:w-1/2 mb-4 lg:mb-0"><img className="rounded shadow" style={{height: '14.5rem'}} src="https://static.shuffle.dev/uploads/files/ec/ec77466babe5e8f02d259b4c1654b23e4297f309/cheerful-friends-sitting-cafe-talking-with-each-other.jpg" alt /></div>
              <div className="lg:w-2/3 px-4">
                <p className="mt-4">
                  <a className="text-white font-bold bg-yellow-400 leading-loose rounded px-2 py-2">Vida e Hobbie</a>
                </p>
                <p className="my-6 text-2xl text-gray-500 font-bold leading-relaxed">Dividir a conta gera mais amizade</p>
                <a className="mt-4 inline-block mb-3 lg:mb-0  w-full lg:w-auto py-2 leading-loose text-gray-400 font-semibold">Julia Almeida 27/03/2021</a>
              </div>
            </div>
            <div className="flex rounded bg-gray-100 cursor-pointer" style={{height: '14.5rem'}}>
              <div className="lg:w-1/2 mb-4 lg:mb-0"><img className="rounded shadow" style={{height: '14.5rem'}} src="https://static.shuffle.dev/uploads/files/ec/ec77466babe5e8f02d259b4c1654b23e4297f309/cheerful-friends-sitting-cafe-talking-with-each-other.jpg" alt /></div>
              <div className="lg:w-2/3 px-4">
                <p className="mt-4">
                  <a className="text-white font-bold bg-yellow-400 leading-loose rounded px-2 py-2">Vida e Hobbie</a>
                </p>
                <p className="my-6 text-2xl text-gray-500 font-bold leading-relaxed">Dividir a conta gera mais amizade</p>
                <a className="mt-4 inline-block mb-3 lg:mb-0  w-full lg:w-auto py-2 leading-loose text-gray-400 font-semibold">Julia Almeida 27/03/2021</a>
              </div>
            </div>
          </div>
          <div className="lg:hidden w-full lg:w-1/2 px-4">
            <div className="flex h-96 bg-gray-100 rounded-t-lg cursor-pointer"><img className="w-full h-full object-cover rounded-t-lg" src="https://static.shuffle.dev/uploads/files/fb/fbaf56534de36adf7161c70c61794f293b314223/young-pretty-woman-eating-pizza-at-pizza-bar.jpg" alt /></div>
            <div className="bg-gray-100 mb-12 rounded-b-lg cursor-pointer">
              <a className="ml-4 text-white font-bold bg-yellow-400 leading-loose rounded px-3 py-3">Vida e Hobbie</a>
              <h2 className="pl-4 mb-2 mt-2 text-3xl text-gray-500 font-bold font-heading">A vida é melhor com amigos e familiares</h2>
              <p className="pl-4 mb-4 text-lg text-gray-400">As pessoas que usam a yoomy encontram uma felicidade incrível, conseguem encontrar os restaurantes que melhor...</p>
              <a className="pl-4 inline-block mb-3 lg:mb-0 w-full lg:w-auto py-2 leading-loose text-gray-400 font-semibold rounded-xl rounded-t-xl">Julia Almeida 27/03/2021</a>
            </div>
          </div>
          <div className="lg:hidden w-full lg:w-1/2 px-4">
            <div className="flex h-96 bg-gray-100 rounded-t-lg cursor-pointer"><img className="w-full h-full object-cover rounded-t-lg" src="https://static.shuffle.dev/uploads/files/fb/fbaf56534de36adf7161c70c61794f293b314223/young-pretty-woman-eating-pizza-at-pizza-bar.jpg" alt /></div>
            <div className="bg-gray-100 mb-12 rounded-b-lg cursor-pointer">
              <a className="ml-4 text-white font-bold bg-yellow-400 leading-loose rounded px-3 py-3">Vida e Hobbie</a>
              <h2 className="pl-4 mb-2 mt-2 text-3xl text-gray-500 font-bold font-heading">A vida é melhor com amigos e familiares</h2>
              <p className="pl-4 mb-4 text-lg text-gray-400">As pessoas que usam a yoomy encontram uma felicidade incrível, conseguem encontrar os restaurantes que melhor...</p>
              <a className="pl-4 inline-block mb-3 lg:mb-0 w-full lg:w-auto py-2 leading-loose text-gray-400 font-semibold rounded-xl rounded-t-xl">Julia Almeida 27/03/2021</a>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section>
      <div className="container px-4 mx-auto">
        <div className="flex flex-wrap -mx-4 mb-4">
          <div className="blocks w-full">
            <h2 className="mb-8 px-4 mt-2 text-4xl font-bold font-heading text-green-600">Mais lidas</h2>
          </div>
          <div className="w-full lg:w-1/2 px-4">
            <div className="flex h-96 bg-gray-100 rounded-t-lg cursor-pointer"><img className="w-full h-full object-cover rounded-t-lg" src="https://static.shuffle.dev/uploads/files/fb/fbaf56534de36adf7161c70c61794f293b314223/young-pretty-woman-eating-pizza-at-pizza-bar.jpg" alt /></div>
            <div className="bg-gray-100 mb-12 rounded-b-lg cursor-pointer">
              <a className="ml-4 text-white font-bold bg-yellow-400 leading-loose rounded px-3 py-3">Vida e Hobbie</a>
              <h2 className="pl-4 mb-2 mt-2 text-3xl text-gray-500 font-bold font-heading">A vida é melhor com amigos e familiares</h2>
              <p className="pl-4 mb-4 text-lg text-gray-400">As pessoas que usam a yoomy encontram uma felicidade incrível, conseguem encontrar os restaurantes que melhor...</p>
              <a className="pl-4 inline-block mb-3 lg:mb-0 w-full lg:w-auto py-2 leading-loose text-gray-400 font-semibold rounded-xl rounded-t-xl">Julia Almeida 27/03/2021</a>
            </div>
          </div>
          <div className="hidden lg:block ml-2 flex flex-wrap -mx-4 lg:w-1/2">
            <div className="px-4 py-2 border rounded cursor-pointer">
              <div className="pt-2 block">
                <div className="w-40 bg-yellow-400 rounded">
                  <a className="text-white font-bold leading-loose px-2 py-2">Vida e Hobbie</a>
                </div>
                <p className="mt-2 text-1xl text-gray-500 leading-relaxed">Dividir a conta gera mais amizade</p>
              </div>
            </div>
            <div className="mt-3 px-4 py-2 border rounded cursor-pointer">
              <div className="pt-2 block">
                <div className="w-40 bg-yellow-400 rounded">
                  <a className="text-white font-bold leading-loose px-2 py-2">Saúde</a>
                </div>
                <p className="mt-2 text-1xl text-gray-500 leading-relaxed">Evitar filas reduz dor nas costas e pode evitar falecimento</p>
              </div>
            </div>
            <div className="mt-3 px-4 py-2 border rounded cursor-pointer">
              <div className="pt-2 block">
                <div className="w-40 bg-yellow-400 rounded">
                  <a className="text-white font-bold leading-loose px-2 py-2">Gastronomia</a>
                </div>
                <p className="mt-2 text-1xl text-gray-500 leading-relaxed">Novo restaurante 4 estrelas michelan é inaugurado na zona sul...</p>
              </div>
            </div>
            <div className="mt-3 px-4 py-2 border rounded cursor-pointer">
              <div className="pt-2 block">
                <div className="w-40 bg-yellow-400 rounded">
                  <a className="text-white font-bold leading-loose px-2 py-2">Viagem</a>
                </div>
                <p className="mt-2 text-1xl text-gray-500 leading-relaxed">Italia é o pais mais premiado quando o assunto é culinaria</p>
              </div>
            </div>
            <div className="mt-3 px-4 py-2 border rounded cursor-pointer">
              <div className="pt-2 block">
                <div className="w-40 bg-yellow-400 rounded">
                  <a className="text-white font-bold leading-loose rounded px-2 py-2">Esporte</a>
                </div>
                <p className="mt-2 text-1xl text-gray-500 leading-relaxed">Lutador de MMA ganhou 20kg para um campeonat, confira a sua dieta</p>
              </div>
            </div>
          </div>
          <div className="lg:hidden w-full lg:w-1/2 px-4 py-3 mb-12 mx-4 border rounded cursor-pointer">
            <div className="pt-2 block">
              <div className="w-40 bg-yellow-400 rounded">
                <a className="text-white font-bold leading-loose px-3 py-3">Vida e Hobbie</a>
              </div>
              <h2 className="mb-2 mt-4 font-bold text-gray-500 font-heading">Dividir a conta gera mais amizade</h2>
            </div>
          </div>
          <div className="lg:hidden w-full lg:w-1/2 px-4 py-3 mb-12 mx-4 border rounded cursor-pointer">
            <div className="pt-2 block">
              <div className="w-40 bg-yellow-400 rounded">
                <a className="text-white font-bold leading-loose px-3 py-3">Vida e Hobbie</a>
              </div>
              <h2 className="mb-2 mt-4 font-bold text-gray-500 font-heading">Dividir a conta gera mais amizade</h2>
            </div>
          </div>
          <div className="lg:hidden w-full lg:w-1/2 px-4 py-3 mb-12 mx-4 border rounded cursor-pointer">
            <div className="pt-2 block">
              <div className="w-40 bg-yellow-400 rounded">
                <a className="text-white font-bold leading-loose px-3 py-3">Vida e Hobbie</a>
              </div>
              <h2 className="mb-2 mt-4 font-bold text-gray-500 font-heading">Dividir a conta gera mais amizade</h2>
            </div>
          </div>
        </div>
      </div>
    </section>
    <div className="mt-8 container-fluid h-80 bg-yellow-400 mx-auto" />
    <section>
      <div className="lg:pt-8">
        <div className="lg:mt-8 container-fluid mx-auto px-4">
          <div className="flex flex-wrap -mx-4">
            <div className="hidden lg:block w-full lg:w-1/2 px-4 flex items-center justify-center">
              <div className="relative" style={{zIndex: 0}}><img className="h-500 w-1000 object-cover justify-end" src="https://static.shuffle.dev/uploads/files/08/0879150e9ada17d4efef9aa095f20f794faa7de6/Grupo-10534.jpg" alt /></div>
            </div>
            <div className="lg:flex px-8 w-full lg:w-1/2 lg:pl-20 mb-12 lg:mb-0 items-center">
              <div className="w-full text-left">
                <div className="max-w-lg mx-auto lg:mx-0 mt-8">
                  <h2 className="mb-3 text-2xl lg:text-4xl font-bold font-heading">
                    <span className="text-green-600">Receba o conteúdo</span>
                    <span className="text-yellow-400"> especial da yoomy</span>
                    <span className="text-green-600"> para você</span>
                  </h2>
                  <input className="mt-6 w-full p-4 text-1xl bg-gray-50 outline-none rounded" type="text" placeholder="Digite seu e-mail" />
                  <div className="mt-6 lg:block"><a className="inline-block py-3 px-8 text-sm text-white font-bold leading-normal bg-yellow-400 hover:bg-yellow-300 rounded transition duration-200" href="#">Enviar</a></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</>


  
  )
}
