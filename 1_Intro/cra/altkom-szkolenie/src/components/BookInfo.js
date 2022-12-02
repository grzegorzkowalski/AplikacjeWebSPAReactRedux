import {useEffect, useState} from "react";

const BookInfo = ({isbn}) => {
    const [data, setData] = useState(false);

    useEffect(() => {
        fetch(`https://www.googleapis.com/books/v1/volumes?q=isbn:${isbn}`)
            .then(res => res.json())
            .then(responce => setData(responce.items[0].volumeInfo.title));
    }, []);

    if (data) {
        return (
            <h1>
                {data}
            </h1>
        );
    }
    else {
        return null;
    }

};

export default BookInfo;
