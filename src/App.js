
import React, { useEffect, useState } from 'react';
import 'antd/dist/antd.css';
import isPresent from './util';
import { Table, Modal, Button, Input } from 'antd';


function App() {
  const [visible, setVisible] = useState(false)
  const showModal = () => {
    setTitle('Add product');
    setVisible(true);
  };
  const [product, setProduct] = useState([]);
  const [productName, setProductName] = useState('');
  const [price, setPrice] = useState('');
  const [address, setAddress] = useState('');
  const [country, setCountry] = useState('');
  const [id, setId] = useState('');
  const [title,setTitle] = useState('');
  const [onClick, updateMyProduct] = useState([]);
  const [editId, setEditId] = useState(null);

  const addProduct = () => {
    if (editId !== null && editId !== '' && editId !== undefined ) {
      product[editId].productName =  productName;
      product[editId].price =  price;
      product[editId].address =  address;
      product[editId].country =  country;
      product[editId].id =  id;
      handleReset();
    } else {
      setProduct(product.concat({ productName, price, address, country, id }));
      handleReset();
    }
  };
  const handleReset = ()=>{
    setVisible(false);
    setProductName('');
    setPrice('');
    setAddress('');
    setCountry('');
    setId('');
    setEditId('');
  }
  const deleteRow = (idx) => {
    setProduct(product.filter((x, i) => i !== idx));
  };
  const editRow = (record,idx) => {
    console.log('dfasfidf come heresd',idx)
     setTitle('Edit product');
    setVisible(true);
   const { productName, price, address, country, id } = record;
   setEditId(idx);
   setProductName(productName);
   setPrice(price);
   setAddress(address);
   setCountry(country);
   setId(id);
  };

  const handleCancel = () => {
    handleReset();
  };

  const columns = [
    {
      title: 'Product Name',
      dataIndex: 'productName',
      key: 'name',
      render: (text) => <h4>{text}</h4>,
    },
    {
      title: 'price',
      dataIndex: 'price',
      key: 'price',
      render: (text) => <h4>{text}</h4>
    },
    {
      title: 'Id',
      dataIndex: 'id',
      key: 'id',
      render: (text) => <h4>{text}</h4>
    },
    {
      title: 'Address',
      dataIndex: 'address',
      key: 'address',
      render: (text) => <h4>{text}</h4>
    },
    {
      title: 'Country',
      dataIndex: 'country',
      key: 'country',
      render: (text) => <h4>{text}</h4>
    },
    {
      title: 'Action',
      dataIndex: 'delete',
      key: 'delete',
      render: (text, record, idx) => (
        <span>
          <button onClick={() => editRow(record,idx)}>
            edit
          </button>
        <button onClick={() => deleteRow(idx)}>
            Remove
          </button>

        </span>
      ),
    },
  ];
  return (
    <div>
      <Button type="primary" onClick={showModal}>
        Add product
        </Button>
      <Modal
        visible={visible}
        title={title}
        width={350}
        onCancel={handleCancel}
        footer={[
          <Button key="back" onClick={handleCancel}>
            Cancel
            </Button>,
          <Button key="submit" type="primary" onClick={addProduct}>
            Submit
            </Button>,
        ]}
      >

        <Input
          type="text"
          name="product_name"
          value={productName}
          placeholder="Product Name"
          style={{ marginBottom: '.5rem' }}
          onChange={(e) => setProductName(e.target.value)}
        />
        <Input
          type="text"
          name="price"
          value={price}
          placeholder="Price"
          style={{ marginBottom: '.5rem' }}
          onChange={(e) => setPrice(e.target.value)}
        />
        <Input
          type="text"
          name="address"
          placeholder="Address"
          value={address}
          style={{ marginBottom: '.5rem' }}
          onChange={(e) => setAddress(e.target.value)}
        />
        <Input
          type="text"
          placeholder="Country"
          name="country"
          value={country}
          style={{ marginBottom: '.5rem' }}
          onChange={(e) => setCountry(e.target.value)}
        />
        <Input
          type="text"
          name="Id"
          placeholder="Id"
          value={id}
          style={{ marginBottom: '.5rem' }}
          onChange={(e) => setId(e.target.value)}
        />
      </Modal>


      <Table dataSource={product} columns={columns} />
    </div>
  );
}


export default App;
