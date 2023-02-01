import React from "react";

function SelectProvider({products, setSelectedProduct, selectedProduct}) {
    return (
        <div className="flex flex-col space-y-2">
            <p>Select provider</p>
            <div className="grid grid-cols-4 gap-2">
                {products.map((product) => (
                    <div
                        key={product.id}
                        onClick={() => setSelectedProduct(product)}
                        className={`p-3 rounded-xl flex flex-col items-center cursor-pointer justify-center space-y-1 md:space-y-2 text-[10px] md:text-xs ${
                            selectedProduct?.id == product.id &&
                            "border border-blue-400"
                        }`}
                    >
                        <img
                            src={product.provider.logo}
                            className="w-8 h-8 md:w-12 md:h-12 rounded-xl"
                        />
                        <p className="text-gray-600 text-center">
                            {product.name}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default SelectProvider;
