import { Button, Input, Table, Space } from "antd";
import { SearchOutlined } from '@ant-design/icons';
import { useState, useRef } from "react";
import { afiliado } from '../data';
import Highlighter from 'react-highlight-words'
import { createStyles } from 'antd-style';

const useStyle = createStyles(({ css, token }) => {
  const { antCls } = token;
  return {
    customTable: css`
      ${antCls}-table {
        ${antCls}-table-container {
          ${antCls}-table-body,
          ${antCls}-table-content {
            scrollbar-width: thin;
            scrollbar-color: #eaeaea transparent;
            scrollbar-gutter: stable;
          }
        }
      }
    `,
  };
});


export const SiderDashboardComponent = () => {
    
  const { styles } = useStyle();

  const [searchText, setSearchText] = useState('')
  const [searchedColumn, setSearchedColumn] = useState('')
  const searchInput = useRef(null);

  const handleSearch = (selectedKeys, confirm, dataIndex) => {
    confirm();
    setSearchText(selectedKeys[0]);
    setSearchedColumn(dataIndex);
  }

  const handleReset = (clearFilters) => {
    clearFilters();
    setSearchText('');
  }

  const getColumnSearchProps = (dataIndex) => ({
    filterDropdown: ({setSelectedKeys, selectedKeys, confirm, clearFilters, close}) => (
      <div
        onKeyDown={(e) => e.stopPropagation()}
      >
        <Input 
          ref={searchInput}
          placeholder={`Buscar ${dataIndex}`}
          value={selectedKeys[0]}
          onChange={(e)=> setSelectedKeys(e.target.value ? [e.target.value] : [])}
          onPressEnter={() => handleSearch(selectedKeys, confirm, dataIndex)}
        />
        <Space>
          <Button
            type="primary"
            onClick={() => handleSearch(selectedKeys, confirm, dataIndex)}
            icon={<SearchOutlined/>}
            size="small"
          >
            Buscar
          </Button>
          <Button
            onClick={() => clearFilters && handleReset(clearFilters)}
            size="small"
          >
            Reset
          </Button>
          <Button
            type="link"
            size="small"
            onClick={() => {
              confirm({
                closeDropdown: false,
              });
              setSearchText(selectedKeys[0]);
              setSearchedColumn(dataIndex);
            }}
          >
            Filtrar
          </Button>
          <Button
            type="link"
            size="small"
            onClick={() => {
              close();
            }}
          >
            cerrar
          </Button>
        </Space>
      </div>
    ),
    filterIcon: (filtered) => (
      <SearchOutlined 
        style={{
          color: filtered ? '#1677ff' : undefined,
        }}
      />
    ),
    onFilter: (value, record) =>
      record[dataIndex].toString().toLowerCase().includes(value.toLowerCase()),
    onFilterDropdownOpenChange: (visible) => {
      if (visible) {
        setTimeout(()=>searchInput.current?.select(), 100);
      }
    },
    render: (text) =>
      searchedColumn === dataIndex ? (
        <Highlighter
          highlighterStyle={{
            backgroundColor: '#ffc069',
            padding: 0
          }}
          searchWords={[searchText]}
          autoEscape
          textToHighlight={text ? text.toString() : ''}
        />
      ) : (
        text
      ),
  })

    
  const columns = [
    {
      title:'Afiliado',
      dataIndex:'nombre',
      key:'nombre',
      width: '70%',
      ...getColumnSearchProps('nombre')
    },
    {
      title:'Nro Afiliado',
      dataIndex:'nroAfiliado',
      key:'nroAfiliado',
      width: '30%',
      // ...getColumnSearchProps('nroAfiliado')
    }
  ]


  
  return (
    <>
      <Table 
        className={styles.customTable}
        columns={columns} 
        dataSource={afiliado}
        bordered="true"
        pagination={{ 
          hideOnSinglePage: true 
        }}
        // size="middle"
        style={{flex:'1',overflow:'auto'}}
        />
    </>
  )
}
