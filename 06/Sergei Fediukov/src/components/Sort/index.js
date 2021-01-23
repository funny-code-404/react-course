
export const Sort = (props, arg) => {
    let data = arg
    //*** ascending ***
    switch (props.sort.year.ascending) {
        case true:
            return data.sort((prev, next) => prev.year - next.year)
    }
    switch (props.sort.price.ascending) {
        case true:
            return data.sort((prev, next) => prev.price - next.price)
    }
    switch (props.sort.horsepower.ascending) {
        case true:
            return data.sort((prev, next) => prev.horsepower - next.horsepower)
    }
    switch (props.sort.make.ascending) {
        case true:
            return data.sort((prev, next) => {
                if (prev.make < next.make) return -1;
                if (prev.make < next.make) return 1;
            });
    }
    switch (props.sort.model.ascending) {
        case true:
            return data.sort((prev, next) => {
                if (prev.model < next.model) return -1;
                if (prev.model < next.model) return 1;
            });
    }

    //*** descending ***
    switch (props.sort.year.ascending) {
        case true:
            return data.sort((prev, next) => next.year - prev.year)
    }
    switch (props.sort.price.ascending) {
        case true:
            return data.sort((prev, next) => next.price - prev.price)
    }
    switch (props.sort.horsepower.descending) {
        case true:
            return data.sort((prev, next) => next.horsepower - prev.horsepower)
    }
    switch (props.sort.make.descending) {
        case true:
            return data.sort((prev, next) => {
                if (prev.make > next.make) return -1;
                if (prev.make > next.make) return 1;
            });
    }
    switch (props.sort.model.descending) {
        case true:
            return data.sort((prev, next) => {
                if (prev.model > next.model) return -1;
                if (prev.model > next.model) return 1;
            });
    }

    return data
}
