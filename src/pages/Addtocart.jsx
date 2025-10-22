import React from 'react';
import useaddtocart from '../hook/useaddtocart';


const Addtocart = () => {
  const [carts, isError, isLoading] = useaddtocart()
  console.log(carts);

  return (
    <div>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>Name</th>
              <th>price</th>
              <th>category</th>
              <th>action</th>

            </tr>
          </thead>
          <tbody>
            {carts.map(cart => (<tr>
              <td>
                <div className="flex items-center gap-3">
                  <div className="avatar">
                    <div className="mask mask-squircle h-12 w-12">
                      <img
                        src={cart.img}
                        alt="Avatar Tailwind CSS Component" />
                    </div>
                  </div>
                  <div>
                    <div className="font-bold">{cart.title}</div>
                  </div>
                </div>
              </td>
              <td>${cart.price}</td>
              <td>{cart.category}</td>
              <td>
                <button className="btn btn-neutral rounded-full"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                </svg>
                </button>
              </td>
            </tr>))}


          </tbody>
          {/* foot */}
        </table>
      </div>
    </div>
  );
};

export default Addtocart;