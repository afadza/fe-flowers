"use client";

import { Button, Label, Modal, TextInput, FileInput } from "flowbite-react";
import { HiMiniSquaresPlus } from "react-icons/hi2";
import useAdmin from "../../../hooks/useAdmin";

export default function Component() {
  const {
    onCloseModal,
    openModal,
    setOpenModal,
    selectedFile,
    handleFileChange,
    handleCategoriesChange,
    newProduct,
    handleNewProductChange,
    addProduct,
    fileInputRef,
  } = useAdmin();

  return (
    <>
      <Button
        onClick={() => setOpenModal(true)}
        className=" bg-white text-slate-600"
      >
        <HiMiniSquaresPlus size={20} />
        <p className="ml-2">Add Product</p>
      </Button>
      <Modal show={openModal} size="md" onClose={onCloseModal} popup>
        <Modal.Header />
        <Modal.Body>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              addProduct();
            }}
            encType="multipart/form-data"
            className="space-y-6"
          >
            <h3 className="text-xl font-medium text-gray-900 dark:text-white">
              Tambah product baru
            </h3>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="name" value="Name" />
              </div>
              <TextInput
                id="name"
                onChange={handleNewProductChange}
                value={newProduct.name}
                name="name"
                placeholder="Bunga Mawar"
                required
              />
            </div>
            <div>
              <div id="fileUpload" className="max-w-md">
                <div className="mb-2 block">
                  <Label htmlFor="file" value="Upload file" />
                </div>
                {selectedFile && (
                  <div>
                    <img
                      src={URL.createObjectURL(selectedFile)}
                      alt="Selected"
                      className="my-4 w-40 h-24 object-cover"
                    />
                  </div>
                )}
                <FileInput
                  id="file"
                  name="image"
                  ref={fileInputRef}
                  helperText="Select product image"
                  onChange={handleFileChange}
                />
              </div>
            </div>
            <div>
              <p className="mb-2 block text-sm">Category</p>
              <div className=" flex gap-2">
                <div className="mb-2 flex gap-1 items-center">
                  <input
                    type="checkbox"
                    id="flashsale"
                    className="rounded"
                    onChange={handleCategoriesChange}
                  />
                  <Label htmlFor="flashsale" value="Flashsale" />
                </div>
                <div className="mb-2 flex gap-1 items-center">
                  <input
                    type="checkbox"
                    id="new"
                    className="rounded"
                    onChange={handleCategoriesChange}
                  />
                  <Label htmlFor="new" value="New" />
                </div>
                <div className="mb-2 flex gap-1 items-center">
                  <input
                    type="checkbox"
                    id="bestseller"
                    className="rounded"
                    onChange={handleCategoriesChange}
                  />
                  <Label htmlFor="bestseller" value="Bestseller" />
                </div>
              </div>
            </div>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="price" value="Price" />
              </div>
              <TextInput
                id="price"
                onChange={handleNewProductChange}
                value={newProduct.price}
                name="price"
                placeholder="Price"
                required
              />
            </div>
            <div className="w-full">
              <Button type="submit">Add</Button>
            </div>
          </form>
        </Modal.Body>
      </Modal>
    </>
  );
}
