export default {
  filters: [
    {
      title: "Fiyat Aralığı",
      maxHeight: 170,
      items: [
        {
          type: "checkboxlist",
          name: "price",
          values: [
            {
              key: 0, 
              value: '0-250', 
              label: '0-250 TL', 
            },
            {
              key: 1, 
              value: '250-500', 
              label: '250-500 TL', 
            },
            {
              key: 3, 
              value: '0-250', 
              label: '0-250 TL', 
            },
            { 
              key: 4, 
              value: '250-500', 
              label: '250-500 TL', 
            }
          ]
        }
      ]
    },
    {
      title: "Renkler",
      maxHeight: 170,
      items: [
        {
          type: "checkboxlist",
          name: "color",
          values: [
            { 
              key: 0, 
              value: 'grey', 
              label: 'Gri',
              source: "https://via.placeholder.com/100x100.png?text=100x100"
            },
            { 
              key: 1, 
              value: 'block', 
              label: 'Siyah',
              source: "https://via.placeholder.com/100x100.png?text=100x100"
            },
            { 
              key: 2, 
              value: 'grey', 
              label: 'Gri',
              source: "https://via.placeholder.com/100x100.png?text=100x100"
            },
            { 
              key: 3, 
              value: 'block', 
              label: 'Siyah',
              source: "https://via.placeholder.com/100x100.png?text=100x100"
            }
          ]
        }
      ]
    },
    {
      title: "Beden",
      maxHeight: 170,
      items: [
        {
          type: "radiolist",
          name: "size",
          values: [
            { 
              key: 0, 
              value: 'large', 
              label: 'Large'
            },
            { 
              key: 1, 
              value: 'xl', 
              label: 'XL'
            },
            { 
              key: 2, 
              value: 'large', 
              label: 'Large'
            },
            { 
              key: 3, 
              value: 'xl', 
              label: 'XL'
            }
          ]
        }
      ]
    },
    {
      title: "Aralık",
      maxHeight: 170,
      items: [
        {
          type: "input",
          name: "size-min",
          title: "Minimum",
          size: "half"
        },
        {
          type: "input",
          name: "size-max",
          title: "Maximum",
          size: "half"
        }
      ]
    }
  ]
}