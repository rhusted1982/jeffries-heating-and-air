export default (items, render, size) => {
    if(!size || size === 'all')
        return items.slice().map(item => render(item));
    else if(parseInt(~~Number(size)))
        return items.slice().splice(0, ~~Number(size)).map(item => render(item));
    return [];
};