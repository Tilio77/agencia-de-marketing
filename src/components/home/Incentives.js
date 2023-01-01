const incentives = [
    {
      name: 'Envíos gratis',
      imageSrc: 'https://tailwindui.com/img/ecommerce/icons/icon-shipping-simple.svg',
      description: "Todos los artículos vendidos aquí, son enviados a tu domicilio sin ningún costo adicional.",
    },
    {
      name: '2 Años de garantía',
      imageSrc: 'https://tailwindui.com/img/ecommerce/icons/icon-warranty-simple.svg',
      description: "Si se rompe en los primeros 2 años, lo reemplazaremos. Luego de eso te invitamos a comprar otro.",
    },
    {
      name: 'Intercambios',
      imageSrc: 'https://tailwindui.com/img/ecommerce/icons/icon-exchange-simple.svg',
      description:
        "Si no te gusto el artículo comprado, podemos cambiarlo por otro del mismo precio.",
    },
  ]
  
  export default function Incentives() {
    return (
      <div className="bg-white">
        <div className="mx-auto lg:mx-12 max-w-full py-24 sm:px-2 sm:py-32 lg:px-4">
          <div className="mx-auto max-w-2xl px-4 lg:max-w-none">
            <div className="max-w-3xl">
              <h2 className="text-4xl font-bold tracking-tight text-gray-900">
                Construimos nuestro negocio en el internet
              </h2>
              <p className="mt-4 text-gray-500">
                At the beginning at least, but then we realized we could make a lot more money if we kinda stopped caring
                about that. Our new strategy is to write a bunch of things that look really good in the headlines, then
                clarify in the small print but hope people don't actually read it.
              </p>
            </div>
            <div className="mt-16 grid grid-cols-1 gap-y-10 gap-x-8 lg:grid-cols-3">
              {incentives.map((incentive) => (
                <div key={incentive.name} className="sm:flex lg:block">
                  <div className="sm:flex-shrink-0">
                    <img className="h-16 w-16" src={incentive.imageSrc} alt="" />
                  </div>
                  <div className="mt-4 sm:mt-0 sm:ml-6 lg:mt-6 lg:ml-0">
                    <h3 className="text-sm font-medium text-gray-900">{incentive.name}</h3>
                    <p className="mt-2 text-sm text-gray-500">{incentive.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    )
  }