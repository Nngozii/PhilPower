import { Plus } from "lucide-react";

const inventoryData = [
  {
    id: "SKU-1001",
    name: "Wireless Noise-Cancelling Headphones",
    category: "Electronics",
    stock: 145,
    costPrice: "$150.00",
    sellingPrice: "$299.00",
    floorPrice: "$250.00",
    retailPrice: "$320.00",
    status: "In Stock",
    supplier: "AudioTech Global",
    lastStocked: "Apr 01, 2026",
    description:
      "Premium noise-cancelling headphones with 30-hour battery life and spatial audio support.",
  },
  {
    id: "SKU-1002",
    name: "Mechanical Gaming Keyboard",
    category: "Accessories",
    stock: 12,
    costPrice: "$70.00",
    sellingPrice: "$149.00",
    floorPrice: "$120.00",
    retailPrice: "$159.00",
    status: "Low Stock",
    supplier: "KeyMaster Inc.",
    lastStocked: "Mar 15, 2026",
    description:
      "RGB mechanical keyboard with tactile switches and programmable macro keys.",
  },
  {
    id: "SKU-1003",
    name: 'Ultra-Wide Monitor 34"',
    category: "Electronics",
    stock: 0,
    costPrice: "$500.00",
    sellingPrice: "$799.00",
    floorPrice: "$700.00",
    retailPrice: "$849.00",
    status: "Out of Stock",
    supplier: "Visionary Displays",
    lastStocked: "Feb 20, 2026",
    description:
      "34-inch curved ultra-wide monitor with 144Hz refresh rate and 1ms response time.",
  },
];

const Inventory = () => {
  const thStyle =
    "px-6 py-4 text-xs font-semibold text-gray-500 uppercase tracking-wider";
  const tdStyle = "px-6 py-4 whitespace-nowrap";
  return (
    <div className="max-w-7xl mx-auto space-y-6 relative">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-semibold text-gray-900 tracking-tight">
            List of Products
          </h1>
          <p className="text-sm text-gray-500 mt-1">
            Manage product catalog and stock levels.
          </p>
        </div>
        <button className="inline-flex items-center justify-center gap-2 bg-black text-white px-4 py-2.5 rounded-lg text-sm font-medium hover:bg-gray-800 transition-colors shadow-sm">
          <Plus className="w-4 h-4" />
          Add Product
        </button>
      </div>

      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
        
        {/*Tool Bar*/}
        <div className="p-4 border-b border-gray-100 flex flex-col sm:flex-row sm:items-center gap-4 justify-between bg-gray-50/50">
        
        </div>

        {/*Inventory Table*/}
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-gray-50/50 border-b border-gray-100">
                <th className={thStyle}>Product ID</th>
                <th className={thStyle}>Name</th>
                <th className={thStyle}>Cost Price</th>
                <th className={thStyle}>Selling Price</th>
                <th className={thStyle}>Floor Price</th>
                <th className={thStyle}>Retail Price</th>
                <th className={thStyle}>Stock</th>
                <th className={thStyle}>Actions</th>
              </tr>
            </thead>

            <tbody className="divide-y divide-gray-200">
              {inventoryData.map((items) => {
                return (
                  <tr key={items.id}>
                    <td className={tdStyle}>
                      <div className="text-sm font-mono text-blue-600 font-medium">
                        {items.id}
                      </div>
                    </td>
                    <td className={tdStyle}>
                      <div className="text-sm font-medium text-gray-900 truncate max-w-[200px]">
                        {items.name}
                      </div>
                    </td>
                    <td className={tdStyle}>
                      <div className="text-sm text-gray-500">
                        {items.costPrice}
                      </div>
                    </td>
                    <td className={tdStyle}>
                      <div className="text-sm font-medium text-gray-900">
                        {items.sellingPrice}
                      </div>
                    </td>
                    <td className={tdStyle}>
                      <div className="text-sm text-gray-500">
                        {items.floorPrice}
                      </div>
                    </td>
                    <td className={tdStyle}>
                      <div className="text-sm text-gray-500">
                        {items.retailPrice}
                      </div>
                    </td>
                    <td className={tdStyle}>
                      <div className="flex items-center gap-2">
                        <span className="text-sm font-medium text-gray-900">
                          {items.stock}
                        </span>
                        {items.stock === 0 && (
                          <span className="w-2 h-2 rounded-full bg-red-500"></span>
                        )}
                        {items.stock > 0 && items.stock <= 20 && (
                          <span className="w-2 h-2 rounded-full bg-amber-500"></span>
                        )}
                        {items.stock > 20 && (
                          <span className="w-2 h-2 rounded-full bg-green-500"></span>
                        )}
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Inventory;
