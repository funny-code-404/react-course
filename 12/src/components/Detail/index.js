import React from "react";
import PropTypes from "prop-types";

import "./detail.css";
import DetailCreatedIn from "./CreatedIn";
import DetailUniqueUnit from "./UniqueUnit";
import DetailUniqueTech from "./UniqueTech";
import CivilizationBonus from "./CivilizationBonus";
import AttackBonus from "./AttackBonus";
import Special from "./Special";
import Cost from "./Cost";

class Detail extends React.Component {
    render() {
        const {
            name,
            army_type,
            expansion,
            team_bonus,
            civilization_bonus,
            unique_unit,
            unique_tech,
            description,
            age,
            created_in,
            cost,
            build_time,
            reload_time,
            attack_delay,
            movement_rate,
            line_of_sight,
            hit_points,
            range,
            attack,
            armor,
            accuracy,
            special,
            attack_bonus,
            search_radius,
        } = this.props.data;

        const arrs = [
            { army_type },
            { team_bonus },
            { description },
            { expansion },
            { age },
            { build_time },
            { reload_time },
            { attack_delay },
            { movement_rate },
            { line_of_sight },
            { hit_points },
            { range },
            { attack },
            { armor },
            { search_radius },
            { accuracy },
        ];

        return (
            <div className="detail">
                <h1>{name}</h1>
                <div className="ditail-block">
                    {arrs.map((x) => (
                        Object.keys(x).map((key) => ( 
                                x[key] && 
                                    <p key={key}>
                                        {key}: <span>{x[key]}</span>
                                    </p>
                            )
                        )
                    ))}
                    {cost && <Cost data={cost} />}
                    {attack_bonus && <AttackBonus data={attack_bonus} />}
                    {special && <Special data={special} />}
                    {civilization_bonus && (
                        <CivilizationBonus data={civilization_bonus} />
                    )}
                    {unique_unit && Boolean(unique_unit.length) && (
                        <DetailUniqueUnit data={unique_unit} />
                    )}
                    {unique_tech && Boolean(unique_tech.length) && (
                        <DetailUniqueTech data={unique_tech} />
                    )}
                    {created_in && Boolean(created_in.length) && (
                        <DetailCreatedIn data={created_in} />
                    )}
                </div>
            </div>
        );
    }
}

Detail.propTypes = {
    data: PropTypes.objectOf(
        PropTypes.oneOfType([
            PropTypes.string,
            PropTypes.number,
            PropTypes.arrayOf(PropTypes.string),
            PropTypes.objectOf(
                PropTypes.oneOfType([PropTypes.number, PropTypes.string])
            ),
        ])
    ),
};

export default Detail;
