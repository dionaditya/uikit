# Layout

> Some components that related to Layout, this components only helpers, for more info how yo use it please visit [BootStrap](https://getbootstrap.com/docs/4.3/layout/grid/)

## Containers

### Container

<Preview>
  <RfContainer class="example-container"><div class="example-body">Body</div><div class="example-side">Side</div></RfContainer>
</Preview>

```html
  <RfContainer></RfContainer>
```

### Fluid Container

<Preview>
  <RfContainer class="example-container" fluid><div class="example-body">Body</div><div class="example-side">Side</div></RfContainer>
</Preview>

```html
  <RfContainer fluid></RfContainer>
```

## Row

<Preview>
  <RfContainer><RfRow class="example-container"><div class="example-body">Body</div><div class="example-side">Side</div></RfRow></RfContainer>
</Preview>

```html
  <RfRow></RfRow>
```

## Col

<Preview>
  <RfContainer><RfCol class="example-container"><div class="example-body">Body</div><div class="example-side">Side</div></RfCol></RfContainer>
</Preview>

```html
  <RfCol></RfCol>
```


<style lang="scss" scoped>
  .example-body {
    min-width: 70%;
    height: 150px;
    float: left;
    background-color: lightblue;
    text-align: center;
  }
  .example-side {
    background-color: lightgreen;
    height: 150px;
    text-align: center;
    width: 20%;
    float:right;
  }
  .example-container:after {
    content: "";
    display: table;
    clear: both;
  }
</style>
