function getData() {
    console.log(this.name)
}

res = getData.bind({
    name: 'gajanan'
}).bind({
    name: 'max'
})

res()