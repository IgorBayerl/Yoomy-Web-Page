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
    <section>
      <div className="lg:pt-8 justify-center bg-yellow-400">
        <div className="mt-8 container-fluid mx-auto px-4">
          <div className="flex flex-wrap -mx-4">
            <div className="hidden lg:block w-full lg:w-1/2 px-4 flex items-center justify-center">
              <div style={{zIndex: 0}}><img className="object-scale-down justify-end" src="https://static.shuffle.dev/uploads/files/bc/bcdf785771d2e3494d757229acba3ceb6a545532/Grupo-10533.png" alt /></div>
            </div>
            <div className="lg:flex px-8 w-full lg:w-1/2 lg:pl-20 mb-8 items-center justify-center">
              <div className="w-full text-left px-4 bg-white rounded">
                <div className="pl-3 md:pl-8 max-w-lg mx-auto mt-8">
                  <h2 className="pt-8 lg:pt-0 mb-3 text-2xl md:text-3xl lg:text-4xl font-bold font-heading">
                    <span className="text-green-600">Faça seu cliente feliz</span>
                  </h2>
                  <p className="mb-6 text-1xl md:text-2xl w-11/12 lg:text-3xl text-gray-500">Benefícios para entregar a melhor 
                    experiência</p>
                  <p className="text-gray-500 leading-loose">Email</p>
                  <input className="mt-1 w-11/12 p-2 md:p-4 text-1xl mx-auto bg-gray-50 outline-none rounded" type="text" placeholder="Digite seu e-mail" /> 
                  <p className="mt-8 text-gray-500 leading-loose">Senha</p> 
                  <input className="mt-1 w-11/12 p-2 md:p-4 text-1xl bg-gray-50 outline-none rounded" type="text" placeholder="Digite seu e-mail" />   
                  <p className="mt-1 text-yellow-400 leading-loose cursor-pointer">Esqueci a senha</p>    
                  <div className="pb-8 lg:pb-0 my-6 flex w-11/12 justify-end">
                    <a className="inline-block py-3 px-8 text-sm text-white font-bold leading-normal bg-yellow-400 hover:bg-yellow-300 rounded transition duration-200" href="#">Enviar</a>
                  </div>     
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
