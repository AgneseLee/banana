var { normalize, schema, denormalize } = require('normalizr');

const underwrite = new schema.Entity(
    'underWrites',
    {},
    {
        idAttribute: value => value.id,
    },
);
const ivProduct = new schema.Entity(
    'ivProducts',
    {},
    {
        idAttribute: value => value.productId,
    },
);
const mainTask = new schema.Entity(
    'mainTasks',
    {
        ivProducts: [ivProduct],
        underwrite: underwrite,
    },
    {
        idAttribute: value => value.mainTaskId,
    },
);
var originalData = '';
var normalizedData = '';
console.log(originalData, normalizedData);
originalData = [
    {
        mainTaskId: 100015570,
        name: '测试',
        idType: '01',
        idNum: '2114021XXXXXXXX12',
        ivProducts: [
            {
                productId: 106255,
                productName: 'test1',
                productCode: '23',
            },
        ],
        underwrite: {
            id: 125254,
            mainTaskId: 100015570,
        },
    },
    {
        mainTaskId: 100015560,
        name: '高老庄',
        idType: '01',
        idNum: '211402199XXXXXXX12',
        ivProducts: [
            {
                productId: 107170,
                productName: 'test2',
                productCode: '26',
            },
            {
                productId: 105382,
                productName: 'test4',
                productCode: '24',
            },
            {
                productId: 105383,
                productName: 'test3',
                productCode: '25',
            },
        ],
        underwrite: {
            id: 125199,
            mainTaskId: 100015560,
        },
    },
    {
        mainTaskId: 100015540,
        name: '测试666',
        idType: '01',
        idNum: '211XXXXXXX012',
        ivProducts: [
            {
                productId: 100382,
                productName: 'test4',
                productCode: '24',
            },
            {
                productId: 100383,
                productName: 'test3',
                productCode: '25',
            },
            {
                productId: 100170,
                productName: 'test2',
                productCode: '26',
            },
        ],
        underwrite: {
            id: 124179,
            mainTaskId: 100015540,
        },
    },
];
normalizedData = JSON.stringify(normalize(originalData, [mainTask]));
export{
    normalizedData
}
// console.log(JSON.stringify(normalizedData));