"use client";

import {
  Button,
  Checkbox,
  Label,
  Modal,
  TextInput,
  FileInput,
} from "flowbite-react";
import { useState } from "react";
import { HiMiniSquaresPlus } from "react-icons/hi2";
import UseAuth from "../../../hooks/UseAuth";

export default function Component() {
    const {handleLogout} = UseAuth();
  const [openModal, setOpenModal] = useState(false);
  const [selectedFile, setSelectedFile] = useState(null);
  function onCloseModal() {
    setOpenModal(false);
    setEmail("");
  }

  function handleFileChange(event) {
    const file = event.target.files[0];
    setSelectedFile(file);
  }

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
          <div className="space-y-6">
            <h3 className="text-xl font-medium text-gray-900 dark:text-white">
              Tambah product baru
            </h3>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="name" value="Name" />
              </div>
              <TextInput id="name" placeholder="Bunga Mawar" required />
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
                  helperText="Select product image"
                  onChange={handleFileChange}
                />
              </div>
            </div>
            <div>
              <p className="mb-2 block text-sm">Category</p>
              <div className=" flex gap-2">
                <div className="mb-2 flex gap-1 items-center">
                  <input type="checkbox" id="flashsale" className="rounded" />
                  <Label htmlFor="flashsale" value="Flashsale" />
                </div>
                <div className="mb-2 flex gap-1 items-center">
                  <input type="checkbox" id="new" className="rounded" />
                  <Label htmlFor="new" value="New" />
                </div>
                <div className="mb-2 flex gap-1 items-center">
                  <input type="checkbox" id="bestseller" className="rounded" />
                  <Label htmlFor="bestseller" value="Bestseller" />
                </div>
              </div>
            </div>
            <div className="w-full">
              <Button>Add</Button>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}
