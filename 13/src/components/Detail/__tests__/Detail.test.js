import React from "react";
import { configure, shallow } from "enzyme";
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

import Detail from "..";
import DetailCreatedIn  from "../CreatedIn";
import DetailUniqueUnit  from "../UniqueUnit";
import DetailUniqueTech  from "../UniqueTech";
import CivilizationBonus from "../CivilizationBonus";
import AttackBonus from "../AttackBonus";
import Special from "../Special";
import Cost from "../Cost";

configure({ adapter: new Adapter() });

describe('DETAIL', () => {
    const props = {
        data: { 
            name: 'test', 
            army_type: 'text',
            civilization_bonus: 'test', 
            unique_unit: [ 'test' ], 
            unique_tech: [ 'test' ], 
            created_in: 'test'  , 
            cost: 'test', 
            special: 'test',
            attack_bonus: 'text', 
        },
    }

    let wrapper;

    beforeEach(() => {
        wrapper = shallow(<Detail {...props} />);
    });

    it('to Match Snapshot', () => {
        expect(wrapper).toMatchSnapshot();
    });

    it('Component is return 1 content "h1" ', () => {
        expect(wrapper.find('h1')).toHaveLength(1);
    });
    it('Component is return 1 content "p" ', () => {
        expect(wrapper.find('p')).toHaveLength(1);
    });
    it('Component is return 1 content "span" ', () => {
        expect(wrapper.find('span')).toHaveLength(1);
    });
    it('Component is return 1 content "cost" ', () => {
        expect(wrapper.find(Cost)).toHaveLength(1)
    })
    it('Component is return 1 content "attack bonus" ', () => {
        expect(wrapper.find(AttackBonus)).toHaveLength(1)
    })
    it('Component is return 1 content "special" ', () => {
        expect(wrapper.find(Special)).toHaveLength(1)
    })
    it('Component is return 1 content "civilizations bonus" ', () => {
        expect(wrapper.find(CivilizationBonus)).toHaveLength(1)
    })
    it('Component is return 1 content "unique unit" ', () => {
        expect(wrapper.find(DetailUniqueUnit)).toHaveLength(1)
    })
    it('Component is return 1 content "unique tech" ', () => {
        expect(wrapper.find(DetailUniqueTech)).toHaveLength(1)
    })
    it('Component is return 1 content "created in" ', () => {
        expect(wrapper.find(DetailCreatedIn)).toHaveLength(1)
    })

    describe('Component should render correct content', () => {
        it('Component should render correct props in "h1" ', () => {
            expect(wrapper.find('h1').props().children).toEqual(props.data.name);
        });
        it('Component should render correct props in "span" ', () => {
            expect(wrapper.find('span').props().children).toEqual(props.data.army_type);
        });
        it('Component should render correct after props changing in "span" ', () => {
            const new_text = 'NEW';
            wrapper.setProps({ data: { army_type: new_text }})
            expect(wrapper.find('span').props().children).toEqual(new_text);
        });
        it('Component should render correct after props changing in "h1" ', () => {
            const new_text = 'NEW';
            wrapper.setProps({ data: { name: new_text }})
            expect(wrapper.find('h1').props().children).toEqual(new_text);
        });
    })
});

// npm run test src/components/Detail