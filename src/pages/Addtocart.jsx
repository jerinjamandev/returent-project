import React from 'react';
import useaddtocart from '../hook/useaddtocart';
import { MdOutlinePayments } from "react-icons/md";
import axiosinstance from '../hook/useAxios';



const Addtocart = () => {
  const [carts,refetch, isError, isLoading] = useaddtocart()
  console.log(carts);

  const Totalprice = carts.reduce((a, b) => a + b.price, 0)

  const handlecancel=(id)=>{
    axiosinstance.delete(`/cart/${id}`)
    .then(res=>{console.log(res.data);
      refetch()
    })
    .catch(error=>{console.log(error.message);
    })
  }
  return (
    <div className='flex items-start justify-center mx-auto w-[90%] my-15'>
      <div className="overflow-x-auto w-[80%] flex-initial">
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
                <button onClick={()=>handlecancel(cart._id)} className="btn btn-neutral rounded-full"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                </svg>
                </button>
              </td>
            </tr>))}
          </tbody>
          {/* foot */}
        </table>
      </div>


      <div className="card bg-base-100 shadow-sm w-[20%] flex-initial">
        <div className="card-body">
          <div className="flex justify-between">
            <h2 className="text-2xl font-bold">Total cost</h2>
            <span className="text-xl">${Totalprice.toFixed(2)}</span>
          </div>
          <div className="mt-6">
            <button className="btn btn-success text-white btn-block"><MdOutlinePayments />
              payment</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Addtocart;