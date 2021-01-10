
export const Sort = (props, arg) => {
    let data = arg

    //*** ascending ***

    if (props.sort.year.ascending) { data = data.sort((prev, next) => prev.year - next.year) }
    if (props.sort.price.ascending) { data = data.sort((prev, next) => prev.price - next.price) }
    if (props.sort.horsepower.ascending) { data = data.sort((prev, next) => prev.horsepower - next.horsepower) }
    if (props.sort.make.ascending) {
        data = data.sort((prev, next) => {
            if (prev.make < next.make) return -1;
            if (prev.make < next.make) return 1;
        });
    }
    if (props.sort.model.ascending) {
        data = data.sort((prev, next) => {
            if (prev.model < next.model) return -1;
            if (prev.model < next.model) return 1;
        });
    }
    //*** descending ***

    if (props.sort.year.descending) { data = data.sort((prev, next) => next.year - prev.year) }
    if (props.sort.price.descending) { data = data.sort((prev, next) => next.price - prev.price) }
    if (props.sort.horsepower.descending) { data = data.sort((prev, next) => next.horsepower - prev.horsepower) }
    if (props.sort.make.descending) {
        data = data.sort((prev, next) => {
            if (prev.make > next.make) return -1;
            if (prev.make > next.make) return 1;
        });
    }
    if (props.sort.model.descending) {
        data = data.sort((prev, next) => {
            if (prev.model > next.model) return -1;
            if (prev.model > next.model) return 1;
        });
    }
    return data
}
