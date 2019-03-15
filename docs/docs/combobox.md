# ComboBox

## ComboBox Default
<Preview>
  <RfComboBox id="comboBox" label="Combo box" type="secondary" children="children_default"/>
</Preview>

```html
  <RfComboBox id="comboBox" label="Combo box" type="secondary" children="children"/>
```

```js
export default {
  data() {
    return {
      children: [
          {
            name: 'ComboBox Header',
            type: 'header'
          },
          {
            name: 'Link',
            link: '/',
            active: false,
            disabled: false,
          },
          {
            name: 'Active Link',
            link: '/',
            active: true,
            disabled: false,
          },
          {
            name: 'Action',
            link: '#',
            onClick: (item, $event) => alert('Action called'),
            active: false,
            disabled: false,
          },
          {
            name: 'divider'
          },
          {
            name: 'Disabled',
            link: '/disabled',
            active: false,
            disabled: true,
          }
      ]
    }
  }
}
```

## ComboBox Type
<Preview>
  <RfComboBox id="comboBox" label="Combo box" type="primary" children="children_default"/>
  <RfComboBox id="comboBox" label="Combo box" type="secondary" children="children_default"/>
  <RfComboBox id="comboBox" label="Combo box" type="success" children="children_default"/>
  <RfComboBox id="comboBox" label="Combo box" type="info" children="children_default"/>
  <RfComboBox id="comboBox" label="Combo box" type="warning" children="children_default"/>
  <RfComboBox id="comboBox" label="Combo box" type="danger" children="children_default"/>
</Preview>

```html
  <RfComboBox id="comboBox" label="Combo box" type="primary" children="children"/>
  <RfComboBox id="comboBox" label="Combo box" type="secondary" children="children"/>
  <RfComboBox id="comboBox" label="Combo box" type="success" children="children"/>
  <RfComboBox id="comboBox" label="Combo box" type="info" children="children"/>
  <RfComboBox id="comboBox" label="Combo box" type="warning" children="children"/>
  <RfComboBox id="comboBox" label="Combo box" type="danger" children="children"/>
```

## ComboBox Size

<Preview>
  <RfComboBox id="comboBox" label="Combo box" size="lg" type="secondary" children="children_default"/>
  <RfComboBox id="comboBox" label="Combo box" size="sm" type="secondary" children="children_default"/>
</Preview>

```html
  <RfComboBox id="comboBox" label="Combo box" size="lg" type="secondary" children="children"/>
  <RfComboBox id="comboBox" label="Combo box" size="sm" type="secondary" children="children"/>
```

## ComboBox Direction

<Preview>
  <RfComboBox id="comboBox" label="Combo box" direction="up" type="secondary" children="children_default"/>
  <RfComboBox id="comboBox" label="Combo box" direction="left" type="secondary" children="children_default"/>
  <RfComboBox id="comboBox" label="Combo box" direction="right" type="secondary" children="children_default"/>
  <RfComboBox id="comboBox" label="Combo box" direction="down" type="secondary" children="children_default"/>
</Preview>

```html
  <RfComboBox id="comboBox" label="Combo box" direction="up" type="secondary" children="children"/>
  <RfComboBox id="comboBox" label="Combo box" direction="left" type="secondary" children="children"/>
  <RfComboBox id="comboBox" label="Combo box" direction="right" type="secondary" children="children"/>
  <RfComboBox id="comboBox" label="Combo box" direction="down" type="secondary" children="children"/>
```

<script>
export default {
  data() {
    return {
      children_default: [
          {
            name: 'ComboBox Header',
            type: 'header'
          },
          {
            name: 'Link',
            link: '/',
            active: false,
            disabled: false,
          },
          {
            name: 'Active Link',
            link: '/',
            active: true,
            disabled: false,
          },
          {
            name: 'Action',
            link: '#',
            onClick: (item, $event) => alert('Action called'),
            active: false,
            disabled: false,
          },
          {
            name: 'divider'
          },
          {
            name: 'Disabled',
            link: '/disabled',
            active: false,
            disabled: true,
          }
      ]
    }
  }
}
</script>
