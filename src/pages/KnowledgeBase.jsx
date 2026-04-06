import { useState } from "react";
import Layout from "../components/layout/Layout";
import Card from "../components/ui/Card";
import Modal from "../components/ui/Modal";
import Input from "../components/ui/Input";
import data from "../data/dummyData";

const KnowledgeBase = () => {
  const [open, setOpen] = useState(false);
  const [search, setSearch] = useState("");

  const filteredData = data.filter((item) =>
    item.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <Layout onCreate={() => setOpen(true)}>
      <div className="max-w-[1400px] mx-auto h-full flex flex-col bg-color-white">
        {/* TOP BAR */}
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-[17px] font-medium text-dark-black/80">
            Knowledge Base
          </h2>

          <div className="flex items-center gap-3">
            <Input
              placeholder="Search..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              width="w-[220px]"
            />

            <button
              onClick={() => setOpen(true)}
              className="bg-primary text-white px-2.5 py-2.5 rounded-md text-xs whitespace-nowrap"
            >
              + Create New
            </button>
          </div>
        </div>

        <div className="bg-white rounded-xl border p-5">
          {/* GRID */}
          <div className="grid grid-cols-3 gap-4">
            {filteredData.length === 0 ? (
              <p className="text-gray-500">No data available</p>
            ) : (
              filteredData.map((item, i) => <Card key={i} item={item} />)
            )}
          </div>
        </div>

        <div className="mt-12 mb-1 flex-1 overflow-y-auto">
          {/* FOOTER */}
          <div className="flex justify-between items-center mt-6 text-xs text-black">
            <p>6 rows</p>

            <div className="flex items-center gap-5">
              {/* Rows per page */}
              <div className="flex items-center gap-2">
                <span className="text-black">Rows per page</span>
                <select className="border px-2 py-0.5 rounded text-xs">
                  <option>10</option>
                </select>
              </div>

              {/* Pagination */}
              <div className="flex items-center gap-2">
                <span className="mx-1 text-black">page 1 of 1</span>
                <button className="px-1.5 py-0.5 border rounded">{"<<"}</button>
                <button className="px-1.5 py-0.5 border rounded">{"<"}</button>
                <button className="px-1.5 py-0.5 border rounded">{">"}</button>
                <button className="px-1.5 py-0.5 border rounded">{">>"}</button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Modal isOpen={open} onClose={() => setOpen(false)} />
    </Layout>
  );
};

export default KnowledgeBase;