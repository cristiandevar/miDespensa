// import { BRAND } from '../../types/brand';
// import BrandOne from '../../images/brand/brand-01.svg';
// import BrandTwo from '../../images/brand/brand-02.svg';
// import BrandThree from '../../images/brand/brand-03.svg';
// import BrandFour from '../../images/brand/brand-04.svg';
// import BrandFive from '../../images/brand/brand-05.svg';


const Table = ({columns, children}) => {
  return (
    <div className="rounded-sm border border-stroke bg-white pt-6 pb-2.5 shadow-default sm:px-7.5 xl:pb-1">
        <div className="max-w-full overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                    <tr>
                        {columns.map((column, key) => {
                            return(
                                // <th key={key} className="min-w-[220px] py-4 text-black xl:pl-11">
                                <th
                                    key={key}
                                    scope="col"
                                    className={`py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider ` + (key > 0 && 'px-6') }>
                                    {column}
                                </th>
                            );
                          })}
                    </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                    {children}
                </tbody>
            </table>
        </div>
    </div>


    // <div className="rounded-sm border border-stroke bg-white px-5 pt-6 pb-2.5 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-1">
    //   <h4 className="mb-6 text-xl font-semibold text-black dark:text-white">
    //     Usuarios
    //   </h4>

    //   <div className="flex flex-col">
    //     <div className="grid grid-cols-3 rounded-sm bg-gray-2 dark:bg-meta-4 sm:grid-cols-5">
    //       {columns.map((column, key) => {
    //         return (
    //             <div className="p-2.5 xl:p-5">
    //                 <h5 className="text-sm font-small uppercase xsm:text-base">
    //                     {column}
    //                 </h5>
    //             </div>
    //         )}
    //       )}
    //     </div>

    //     {data.map((user, key) => (
    //       <div
    //         className={`grid grid-cols-3 sm:grid-cols-5 ${
    //           key === data.length - 1
    //             ? ''
    //             : 'border-b border-stroke dark:border-strokedark'
    //         }`}
    //         key={key}
    //       >
    //         <div className="flex items-center gap-3 p-2.5 xl:p-5">
    //           <p className="hidden text-black dark:text-white sm:block">
    //             {key}
    //           </p>
    //         </div>
    //         <div className="flex items-center gap-3 p-2.5 xl:p-5">
    //           <p className="hidden text-black dark:text-white sm:block">
    //             {user.name}
    //           </p>
    //         </div>
    //         <div className="flex items-center gap-3 p-2.5 xl:p-5">
    //           <p className="hidden text-black dark:text-white sm:block">
    //             {user.email}
    //           </p>
    //         </div>
    //         <div className="flex items-center gap-3 p-2.5 xl:p-5">
    //           <p className="hidden text-black dark:text-white sm:block">
    //             {user.created_date}
    //           </p>
    //         </div>
    //         <div className="flex items-center gap-3 p-2.5 xl:p-5">
    //           <p className="hidden text-black dark:text-white sm:block">
    //             {user.updated_date}
    //           </p>
    //         </div>
    //       </div>
    //     ))}
    //   </div>
    // </div>
  );
};

export default Table;
