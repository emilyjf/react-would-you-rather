import React, { Component } from 'react'
import { getArrayFromObj } from '../utils'
import { isAuthedUsersAnswer } from '../utils'

export default class OptionStats extends Component {
    render() {
        const { option, users } = this.props


//need to divide the number of votes for an option by the number of votes for that question
        const totalNumVotes = getArrayFromObj(users).length
//        const totalNumVotes = getArrayFromObj(users.answers).length
        const numOptionVotes = option.votes.length

//        const percentage = Math.floor((100 * numOptionVotes) / totalNumPeople)
         const percentage = Math.floor((numOptionVotes / totalNumVotes) * 100)

        return (
            <ul className="pl-0">
                {/* Stats
                        the number of people who voted for that option
                        the percentage of people who voted for that option */}
                <li className="asked">
                    <span className="callout">{numOptionVotes}</span>{' '}
                    {numOptionVotes > 1 || numOptionVotes === 0
                        ? 'people '
                        : 'person '}{' '}
                    chose this option.
                </li>
                <li className="answered">
                    <span className="callout">{percentage}%</span> voted for
                    this option.
                </li>
            </ul>
        )
    }
}
