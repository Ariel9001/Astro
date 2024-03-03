

const HomeTSX = () => {

    return (
        <section className="mx-auto py-6 sm:px-6 lg:px-8">
            <div className="bg-white shadow-md rounded-lg overflow-hidden">
                <div className="p-6">
                    {/* Contenedor scrollable */}
                    <div className="overflow-auto max-h-[70vh]"> {/* Ajusta el valor de max-h-[500px] según necesites */}
                        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                            <thead className="text-xs text-gray-800 uppercase dark:text-gray-800 border-b-2 border-gray-500">
                                <tr>
                                    <th scope="col" className="py-3 px-6">col-1</th>
                                    <th scope="col" className="py-3 px-6">col-2</th>
                                    <th scope="col" className="py-3 px-6">col-3</th>
                                    <th scope="col" className="py-3 px-6">col-4</th>
                                    <th scope="col" className="py-3 px-6">col-5</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td scope="col" className="py-3 px-6">col-1</td>
                                    <td scope="col" className="py-3 px-6">col-2</td>
                                    <td scope="col" className="py-3 px-6">col-3</td>
                                    <td scope="col" className="py-3 px-6">col-4</td>
                                    <td scope="col" className="py-3 px-6">col-5</td>
                                </tr>
                                <tr>
                                    <td scope="col" className="py-3 px-6">col-1</td>
                                    <td scope="col" className="py-3 px-6">col-2</td>
                                    <td scope="col" className="py-3 px-6">col-3</td>
                                    <td scope="col" className="py-3 px-6">col-4</td>
                                    <td scope="col" className="py-3 px-6">col-5</td>
                                </tr>

                                 <tr>
                                    <td scope="col" className="py-3 px-6">col-1</td>
                                    <td scope="col" className="py-3 px-6">col-2</td>
                                    <td scope="col" className="py-3 px-6">col-3</td>
                                    <td scope="col" className="py-3 px-6">col-4</td>
                                    <td scope="col" className="py-3 px-6">col-5</td>
                                </tr> <tr>
                                    <td scope="col" className="py-3 px-6">col-1</td>
                                    <td scope="col" className="py-3 px-6">col-2</td>
                                    <td scope="col" className="py-3 px-6">col-3</td>
                                    <td scope="col" className="py-3 px-6">col-4</td>
                                    <td scope="col" className="py-3 px-6">col-5</td>
                                </tr>
                                <tr>
                                    <td scope="col" className="py-3 px-6">col-1</td>
                                    <td scope="col" className="py-3 px-6">col-2</td>
                                    <td scope="col" className="py-3 px-6">col-3</td>
                                    <td scope="col" className="py-3 px-6">col-4</td>
                                    <td scope="col" className="py-3 px-6">col-5</td>
                                </tr>
                                <tr>
                                    <td scope="col" className="py-3 px-6">col-1</td>
                                    <td scope="col" className="py-3 px-6">col-2</td>
                                    <td scope="col" className="py-3 px-6">col-3</td>
                                    <td scope="col" className="py-3 px-6">col-4</td>
                                    <td scope="col" className="py-3 px-6">col-5</td>
                                </tr>
                              
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </section>


    );
};

export default HomeTSX;
