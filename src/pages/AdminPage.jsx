import React, { useEffect, useState } from "react";
import useAdmin from "../hooks/useAdmin";

function AdminPage() {
  const { Carts } = useAdmin();
  const [transactionsByCustomer, setTransactionsByCustomer] = useState({});

  useEffect(() => {
    const groupedTransactions = Carts.reduce((acc, transaction) => {
      const customerName = transaction.customer.name;
      if (!acc[customerName]) {
        acc[customerName] = [];
      }
      acc[customerName].push(transaction);
      return acc;
    }, {});
    setTransactionsByCustomer(groupedTransactions);
  }, []);
  return (
    <div>
      <h1>Data Transaksi Berdasarkan Pelanggan</h1>
      {Object.entries(transactionsByCustomer).map(
        ([customer, transactions]) => (
          <div key={customer}>
            <h2>Customer: {customer}</h2>
            <div>
              {transactions.map((transaction) => (
                <div key={transaction.id}>
                  <p>ID: {transaction.id}</p>
                  <p>Total Harga: {transaction.totalPrice}</p>
                  <p>Tanggal: {transaction.createdAt}</p>
                </div>
              ))}
            </div>
          </div>
        )
      )}
    </div>
  );
}

export default AdminPage;
