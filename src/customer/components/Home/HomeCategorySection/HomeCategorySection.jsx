import React from 'react';
import HomeCategoryCard2 from '../HomeCategoryCard2/HomeCategoryCard2';

const HomeCategorySection = () => {
    const Categories = [
        {
            frontText: 'fashion',
            imageUrl: 'https://res.cloudinary.com/de1zj2mnp/image/upload/v1722599535/icqmlsmefzz8nsphv0rs.jpg',
            backText: 'fashion'
        },
        {
            frontText: 'Home Decor',
            imageUrl: 'https://res.cloudinary.com/de1zj2mnp/image/upload/v1722599480/irdz95at1nqymakvdwtr.jpg',
            backText: 'Home Decor'
        },
        {
            frontText: 'Arts',
            imageUrl: 'https://res.cloudinary.com/de1zj2mnp/image/upload/v1722599618/l88j2w6w0pt8grhghu3j.jpg',
            backText: 'Arts'
        },
        {
            frontText: 'Customized',
            imageUrl: 'https://res.cloudinary.com/de1zj2mnp/image/upload/v1722599589/ryqshdcsnhjkezdslpkv.jpg',
            backText: 'Customized'
        },
        {
            frontText: 'Seasonal',
            imageUrl: 'https://res.cloudinary.com/de1zj2mnp/image/upload/v1722599589/ryqshdcsnhjkezdslpkv.jpg',
            backText: 'Seasonal'
        },
    ];

    return (
        <div className="mb-12 mt-[70px] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-14">
            {Categories.map((category, index) => (
                <HomeCategoryCard2
                    key={index}
                    imageUrl={category.imageUrl}
                    backText={category.backText}
                />
            ))}
        </div>
    );
};

export default HomeCategorySection;
