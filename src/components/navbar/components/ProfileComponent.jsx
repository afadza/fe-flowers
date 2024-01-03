import React from "react";
import { VscAccount } from "react-icons/vsc";
import useAddress from "../../../hooks/useAddress";
import { FiMapPin } from "react-icons/fi";
import { motion } from "framer-motion";
import { Tabs } from "flowbite-react";
import { FaUserEdit } from "react-icons/fa";

function ProfileComponent() {
  const {
    auth,
    isOpen,
    setIsOpen,
    isLoading,
    editCustomer,
    Provinces,
    Regencies,
    Districts,
    Villages,
    selectedProvinceId,
    selectedRegencyId,
    selectedDistrictId,
    selectedVillageId,
    customer,
    edit,
    handleEdit,
    handleChange,
    handleProvinceChange,
    handleRegencyChange,
    handleDistrictChange,
    handleVillageChange,
  } = useAddress();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <button
        data-modal-target="crud-modal"
        data-modal-toggle="crud-modal"
        className="block"
        type="button"
      >
        <VscAccount size={30} />
      </button>

      <div
        id="crud-modal"
        tabIndex={-1}
        aria-hidden="true"
        className="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full"
      >
        <div className="relative p-4 w-full max-w-md max-h-full">
          <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
            <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                Your Profile
              </h3>
              <button
                type="button"
                className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-[8px] w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                data-modal-toggle="crud-modal"
              >
                <svg
                  className="w-3 h-3"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 14"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                  />
                </svg>
                <span className="sr-only">Close modal</span>
              </button>
            </div>
            {/* Modal body */}

            {edit ? (
              <div className="p-4 md:p-5 bg-pink-950">
                <div className="mb-10">
                  <Tabs aria-label="Full width tabs" style="fullWidth">
                    <Tabs.Item active title="Profile">
                      <div className="col-span-2 ">
                        <label
                          htmlFor="name"
                          className="block text-[8px] font-medium text-gray-900 dark:text-white"
                        >
                          Name
                        </label>
                        <input
                          type="text"
                          name="name"
                          onChange={handleChange}
                          value={customer.name}
                          id="name"
                          className="bg-gray-50 border border-gray-300 text-gray-900 text-[8px] rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-1 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                          placeholder="Your name"
                          required
                        />
                      </div>
                      <div className="w-full col-span-2 mt-2">
                        <p className="text-[8px] text-gray-800">Address</p>
                        <motion.nav
                          initial={false}
                          animate={isOpen ? "open" : "closed"}
                          className={`menu w-full col-span-2 ${
                            isOpen ? "h-full" : "h-10"
                          } bg-gray-50 cursor-pointer  border border-gray-300 text-gray-900 text-[8px] rounded-lg focus:ring-primary-600 focus:border-primary-600 flex flex-col w-full p-1 dark:bg-gray-600 dark:border-gray-500 col-span-2 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 `}
                        >
                          <motion.button
                            type="button"
                            whileTap={{ scale: 0.97 }}
                            onClick={() => {
                              setIsOpen(!isOpen);
                            }}
                            className="w-full col-span-2"
                          >
                            <div className="bg-gray-50 cursor-pointer  border border-gray-300 border-b-0 text-gray-900 text-[8px] rounded-md rounded-bl-none rounded-br-none -mb-2 focus:ring-primary-600 focus:border-primary-600 flex flex-col w-full p-1 dark:bg-gray-600 dark:border-gray-500 col-span-2 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 items-center">
                              <div className="flex items-center w-full justify-between">
                                <p>Masukan alamat mu</p>
                              </div>
                            </div>
                          </motion.button>
                          <motion.div
                            variants={{
                              open: {
                                clipPath: "inset(0% 0% 0% 0% round 10px)",
                                transition: {
                                  type: "spring",
                                  bounce: 0,
                                  duration: 0.7,
                                  delayChildren: 0.3,
                                  staggerChildren: 0.05,
                                },
                              },
                              closed: {
                                clipPath: "inset(10% 50% 90% 50% round 10px)",
                                transition: {
                                  type: "spring",
                                  bounce: 0,
                                  duration: 0.3,
                                },
                              },
                            }}
                            style={{ pointerEvents: isOpen ? "auto" : "none" }}
                          >
                            <div className="col-span-2">
                              <input
                                type="text"
                                name="address"
                                onChange={handleChange}
                                value={customer.address}
                                id="address"
                                className="bg-gray-50 pt-0 border border-gray-300 border-t-0 text-gray-900 text-[8px] rounded-md rounded-tl-none rounded-tr-none block w-full p-1 "
                                placeholder="Contoh : Jl. Kebon jeruk..."
                                required
                              />
                            </div>
                            <motion.div className="col-span-2 flex gap-2  text-[8px]">
                              <div className="w-full">
                                <label className="block text-gray-900 dark:text-white">
                                  Province
                                </label>
                                <select
                                  value={selectedProvinceId.id}
                                  onChange={(e) =>
                                    handleProvinceChange(
                                      e.target.value,
                                      e.target.options[e.target.selectedIndex]
                                        .text
                                    )
                                  }
                                  className="bg-gray-50 border text-[8px] cursor-pointer border-gray-300 text-gray-900 rounded-md focus:ring-primary-500 focus:border-primary-500 block w-full p-1 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                >
                                  <option hidden>Select category</option>
                                  {Provinces?.map((province) => (
                                    <option
                                      key={province.id}
                                      value={province.id}
                                    >
                                      {province.name}
                                    </option>
                                  ))}
                                </select>
                              </div>
                              <div className="w-full">
                                <label className="block text-gray-900 dark:text-white">
                                  Regencies
                                </label>
                                <select
                                  value={selectedRegencyId.id}
                                  onChange={(e) =>
                                    handleRegencyChange(
                                      e.target.value,
                                      e.target.options[e.target.selectedIndex]
                                        .text
                                    )
                                  }
                                  className="bg-gray-50 border text-[8px] cursor-pointer border-gray-300 text-gray-900 rounded-md focus:ring-primary-500 focus:border-primary-500 block w-full p-1 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                >
                                  <option hidden>Select category</option>
                                  {Regencies?.map((regencies) => (
                                    <option
                                      key={regencies.id}
                                      value={regencies.id}
                                    >
                                      {regencies.name}
                                    </option>
                                  ))}
                                </select>
                              </div>
                            </motion.div>
                            <motion.div className="col-span-2 flex gap-2  text-[8px]">
                              <div className="w-full">
                                <label className="block text-gray-900 dark:text-white">
                                  Districts
                                </label>
                                <select
                                  value={selectedDistrictId.id}
                                  onChange={(e) =>
                                    handleDistrictChange(
                                      e.target.value,
                                      e.target.options[e.target.selectedIndex]
                                        .text
                                    )
                                  }
                                  className="bg-gray-50 border text-[8px] cursor-pointer border-gray-300 text-gray-900 rounded-md focus:ring-primary-500 focus:border-primary-500 block w-full p-1 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                >
                                  <option hidden>Select category</option>
                                  {Districts?.map((district) => (
                                    <option
                                      key={district.id}
                                      value={district.id}
                                    >
                                      {district.name}
                                    </option>
                                  ))}
                                </select>
                              </div>
                              <div className="w-full">
                                <label className="block text-gray-900 dark:text-white">
                                  Villages
                                </label>
                                <select
                                  value={selectedVillageId.id}
                                  onChange={(e) =>
                                    handleVillageChange(
                                      e.target.value,
                                      e.target.options[e.target.selectedIndex]
                                        .text
                                    )
                                  }
                                  className="bg-gray-50 border text-[8px] cursor-pointer border-gray-300 text-gray-900 rounded-md focus:ring-primary-500 focus:border-primary-500 block w-full p-1 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                >
                                  <option hidden>Select category</option>
                                  {Villages?.map((village) => (
                                    <option key={village.id} value={village.id}>
                                      {village.name}
                                    </option>
                                  ))}
                                </select>
                              </div>
                            </motion.div>
                          </motion.div>
                        </motion.nav>
                      </div>
                    </Tabs.Item>
                    <Tabs.Item title="Account">
                      <div className="grid grid-cols-2">
                        <div className="col-span-2">
                          <label
                            htmlFor="email"
                            className="block mb-2 text-[8px] font-medium text-gray-900 dark:text-white"
                          >
                            Email
                            <input
                              type="text"
                              name="email"
                              onChange={handleChange}
                              value={customer.email}
                              className="bg-gray-50 border border-gray-300 text-gray-900 text-[8px] rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-1 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                              placeholder="Contoh: jhon@mail.com"
                              required
                            />
                          </label>
                        </div>
                        <div className="col-span-2">
                          <label
                            htmlFor="password"
                            className="block mb-2 text-[8px] font-medium text-gray-900 dark:text-white"
                          >
                            Password
                            <input
                              type="password"
                              name="password"
                              onChange={handleChange}
                              value={customer.password}
                              className="bg-gray-50 border border-gray-300 text-gray-900 text-[8px] rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-1 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                              placeholder="Contoh: *******"
                              required
                            />
                          </label>
                        </div>
                      </div>
                    </Tabs.Item>
                  </Tabs>
                </div>
                <div className="flex justify-end gap-2 ">
                  <button
                    type="button"
                    onClick={handleEdit}
                    className="text-white inline-flex items-center bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-[8px] px-5 py-2.5 text-center dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800"
                  >
                    Cancel
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      handleEdit();
                      editCustomer();
                    }}
                    className="text-white inline-flex items-center bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-[8px] px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  >
                    Save
                  </button>
                </div>
              </div>
            ) : (
              <div className="bg-pink-950 h-[350px] font-sans text-black w-full flex flex-row justify-center items-end">
                <div className="card w-full mx-auto bg-white  shadow-xl hover:shadow">
                  <img
                    className="w-32 mx-auto rounded-full -mt-16 border-8 border-white bg-white"
                    src="../../../public/assets/images/profile.png"
                    alt=""
                  />
                  <div className="text-center mt-2 gap-2 text-3xl font-medium flex items-center justify-center">
                    <p>👋, {auth.name}</p>
                    <button
                      type="button"
                      onClick={handleEdit}
                      className="text-white items-center bg-pink-950 p-1 rounded-full"
                    >
                      <FaUserEdit size={10} />
                    </button>
                  </div>
                  <div className="px-6 text-center mt-2 font-light text-sm">
                    <p>
                      {auth.address
                        ? auth.address
                        : "Kamu belum menambahkan alamat"}
                    </p>
                  </div>
                  <hr className="mt-8" />
                  <div className="flex p-4 text-center">
                    <button
                      type="button"
                      data-modal-toggle="crud-modal"
                      className="text-white items-center bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg px-5 py-2.5 text-center dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800 w-full"
                    >
                      Cancel
                    </button>
                    <div className="w-0 border border-gray-300 mx-2"></div>
                    <button
                      type="button"
                      onClick={handleEdit}
                      className="text-white items-center bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg px-5 py-2.5 text-center dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800 w-full"
                    >
                      Edit
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfileComponent;
