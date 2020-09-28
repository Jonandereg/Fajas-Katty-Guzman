import React, { FunctionComponent,useState,useContext } from 'react';

import { Table, Input, Button, Space } from 'antd';
import Highlighter from 'react-highlight-words';
import { SearchOutlined } from '@ant-design/icons';
import { adminContext } from '../../../App'




const UsersTable:FunctionComponent= ()=>{
  const { users } = useContext(adminContext)
  const data1 = users

  const columns = [
    {
      title: ' First Name',
      dataIndex: 'firstName',
      key: 'name',
      width: '30%',
      // getColumnSearchProps('name')
    },
    {
      title: ' Last Name',
      dataIndex: 'lastName',
      key: 'name',
      width: '30%',
      // getColumnSearchProps('name')
    },
    {
      title: 'Email',
      dataIndex: 'email',
      key: 'email',
    //  getColumnSearchProps('address'),
    },
    {
      title: 'Age',
      dataIndex: 'age',
      key: 'age',
      width: '20%',
      // getColumnSearchProps('age'),
    },
    {
      title: 'Gender',
      dataIndex: 'gender',
      key: 'gender',
      width: '20%',
      // getColumnSearchProps('age'),
    },
    {
      title: 'Mobile Number',
      dataIndex: 'mobileNumber',
      key: 'mobileNumber',
      width: '20%',
      // getColumnSearchProps('age'),
    },
    
    
    
  ];
  

  const [searchText,setSearchText] = useState('')
  const [searchedColumn, setSearchedColumn ] = useState('')

  // function getColumnSearchProps(dataIndex:any) {
  //  function filterDropdown({ setSelectedKeys, selectedKeys, confirm, clearFilters }) {
  //    return (
  //     <div style={{ padding: 8 }}>
  //     <Input
  //       ref={node => {
  //         searchInput = node;
  //       }}
  //       placeholder={`Search ${dataIndex}`}
  //       value={selectedKeys[0]}
  //       onChange={e => setSelectedKeys(e.target.value ? [e.target.value] : [])}
  //       onPressEnter={() => handleSearch(selectedKeys, confirm, dataIndex)}
  //       style={{ width: 188, marginBottom: 8, display: 'block' }}
  //     />
  //     <Space>
  //       <Button
  //         type="primary"
  //         onClick={() => handleSearch(selectedKeys, confirm, dataIndex)}
  //         icon={<SearchOutlined />}
  //         size="small"
  //         style={{ width: 90 }}
  //       >
  //         Search
  //       </Button>
  //       <Button onClick={() => handleReset(clearFilters)} size="small" style={{ width: 90 }}>
  //         Reset
  //       </Button>
  //     </Space>
  //   </div>
  //    )
  //  }

  //  function filterIcon(filtered:string){
  //   return <SearchOutlined style={{ color: filtered ? '#1890ff' : undefined }} />
  //  }
  //  function onFilter(value:string,record:string){
  //   return  record[dataIndex] ? record[dataIndex].toString().toLowerCase().includes(value.toLowerCase()) : ''
  //  }
  //  function onFilterDropdownVisibleChange (visible:boolean){
  //    if (visible) {
  //      setTimeout(()=>searchInput.select(),100);
  //    }
  //  }

  //  function renderSearch (text:string) {
  //    searchedColumn === dataIndex ? (
  //     <Highlighter
  //     highlightStyle={{ backgroundColor: '#ffc069', padding: 0 }}
  //     searchWords={[searchText]}
  //     autoEscape
  //     textToHighlight={text ? text.toString() : ''}
  //   />
  //    ) : (
  //      text
  //    )
  //  }
  // }
  function handleSearch (selectedKeys:string, confirm:any, dataIndex:string){
  confirm();
  setSearchText(selectedKeys[0])
  setSearchedColumn(dataIndex)
  }
   function handleReset (clearFilters:any) {
     clearFilters();
     setSearchText('')
   }


  return (
    <>
    <Table columns={columns} dataSource={data1} />
    </>
  )
}
 
export default UsersTable
 
  
 