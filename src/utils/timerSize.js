export const  setTime = (size) => {
    console.log('size: ',size);
    const hour = 60, small = 30, medium = 45, large = 60;
    switch (size) {
        case 'small': {
            return small * hour;
        }
        case 'medium': {
            return medium * hour;
        }

        default: {
            return large * hour;
        }
    }
} 