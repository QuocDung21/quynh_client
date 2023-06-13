import React from 'react'
import { useRouter } from 'next/router';
import useAsync from '@hooks/useAsync';
import Image from 'next/image';
import StoreServices from '@services/StoreServices';

const Stores = () => {

    const { data, error } = useAsync(() => StoreServices.getShowingStore());
    const router = useRouter();

    return (
        <>
            {error ? (
                <p className="flex justify-center align-middle items-center m-auto text-xl text-red-500">
                    <span> {error}</span>
                </p>
            ) : (
                data.map((store, i) => (
                    <div
                        key={i}
                        onClick={() =>
                            router.push(
                                `/search?Store=${store.name}`
                            )
                        }
                        className="coupon coupon-home cursor-pointer mx-4 my-4 block md:flex lg:flex md:justify-between lg:justify-between items-center bg-white rounded-md shadow-lg"
                    >
                        <div className="tengah px-8 mt-2 flex items-center justify-items-center">
                            <figure>
                                <Image
                                    src={store.icon}
                                    alt={store.name}
                                    width={150}
                                    height={150}
                                    className="rounded-full"
                                />
                            </figure>
                        </div>
                        <div className="md:border-l-2 lg:border-l-2 border-dotted lg:w-1/2 md:w-1/3 relative px-4 py-4">
                            <div className="info flex items-center">
                                <div className="w-full">
                                    <div className="flex items-center font-serif">
                                        <h3 className="pl-1 text-base mb-2 font-large text-black-700 italic font-bold">
                                            {store.name}
                                        </h3>
                                    </div>
                                    <h5 className="pl-1 font-serif text-sm text-gray-500 leading-6 font-semibold mb-2">
                                        {store.city}
                                    </h5>
                                    <h5 className="pl-1 font-serif text-sm text-gray-500 leading-6 font-semibold mb-2">
                                        {store.address}
                                    </h5>
                                    <h5 className="pl-1 font-serif text-sm text-gray-500 leading-6 font-semibold mb-2">
                                        {store.phone}
                                    </h5>
                                </div>
                            </div>
                        </div>
                    </div>
                )
                ))}
        </>
    )
}

export default Stores