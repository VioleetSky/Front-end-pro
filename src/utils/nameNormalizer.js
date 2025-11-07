const namesMap = Object.freeze({
    "id": 'ID',
    "userId": "User ID",
    "title": "Title",
    "body": "Content",
    "address": "Address",
    "phone": "Phone",
    "website": "Website",
    "company": "Company"
})


const nameNormalizer = (name) => {
    return namesMap[name] || name
}

export default nameNormalizer