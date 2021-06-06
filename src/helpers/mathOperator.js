module.exports = function(options)
{
    var total= 0;
    var costs = options.fn(this).split(',');
    for (let i=0; i<costs.length; i++)
    {
        total+= parseFloat(costs[i]);
    }
    return total;
}