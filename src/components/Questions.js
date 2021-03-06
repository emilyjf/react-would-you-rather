import React, { Component } from 'react'
import { connect } from 'react-redux'
import Question from './Question'
import { getArrayFromObj, isAuthedUsersAnswer, isValidUserID } from '../utils'
import {
    Badge,
    Card,
    Jumbotron,
    ListGroup,
    ListGroupItem,
    ToggleButtonGroup,
    ToggleButton
} from 'react-bootstrap'

class Questions extends Component {
    constructor(props) {
        super(props)

        this.handleFilterChange = this.handleFilterChange.bind(this)
    }

    state = {
        isShowingAnswered: false
    }

    getFilteredQuestions = (isShowingAnswered = false) => {
        const { authedUserID, questions } = this.props

        if (!isValidUserID(authedUserID)) {
            return this.sortQuestions(getArrayFromObj(questions))
        }

        const filteredQuestions = getArrayFromObj(questions).filter(
            (question) =>
                isShowingAnswered ===
                (isAuthedUsersAnswer(question.optionOne, authedUserID) ||
                    isAuthedUsersAnswer(question.optionTwo, authedUserID))
        )

        return this.sortQuestions(filteredQuestions)
    }

    sortQuestions = (questions) => {
        return questions.sort((a, b) => b.timestamp - a.timestamp)
    }

    handleFilterChange = (value) => {
        this.setState({
            ...this.state,
            isShowingAnswered: value ? false : true // relying on truthiness
        })
    }

    render() {
        const { authedUserID, questions } = this.props
        const { isShowingAnswered } = this.state

        const isValidUser = isValidUserID(authedUserID)
        const answered = this.getFilteredQuestions(true)
        const unanswered = this.getFilteredQuestions(false)

        return (
            <Card className="questions mb-3 mx-3">
                {isValidUser && (
                    <Card.Header className="text-center">
                        <ToggleButtonGroup
                            className="mb-1"
                            name="toggleAnswered"
                            value={isShowingAnswered ? 0 : 1}
                            defaultValue={1}
                            onChange={this.handleFilterChange}
                        >
                            <ToggleButton type="radio" value={1}>
                                Unanswered{' '}
                                <Badge variant="light">
                                    {unanswered.length}
                                </Badge>
                            </ToggleButton>
                            <ToggleButton type="radio" value={0}>
                                Answered{' '}
                                <Badge variant="light">{answered.length}</Badge>
                            </ToggleButton>
                        </ToggleButtonGroup>
                    </Card.Header>
                )}

                {isValidUser &&
                    unanswered.length === 0 &&
                    !isShowingAnswered &&
                    Object.keys(questions).length > 0 && (
                        <Card.Body>
                            <Jumbotron className="text-center">
                                <h2>You've answered all of the questions!</h2>
                            </Jumbotron>
                        </Card.Body>
                    )}
                {isValidUser &&
                    answered.length === 0 &&
                    isShowingAnswered &&
                    Object.keys(questions).length > 0 && (
                        <Card.Body>
                            <Jumbotron className="text-center">
                                <h2>You haven't answered any questions yet!</h2>
                            </Jumbotron>
                        </Card.Body>
                    )}

                <ListGroup variant="flush">
                    {questions &&
                        this.getFilteredQuestions(isShowingAnswered).map(
                            (question) => (
                                <ListGroupItem key={question.id}>
                                    <Question
                                        authedUserID={authedUserID}
                                        question={question}
                                        withDetailsButton={true}
                                        withAvatar={true}
                                    />
                                </ListGroupItem>
                            )
                        )}
                </ListGroup>
            </Card>
        )
    }
}

function mapStateToProps({ authedUser, questions }) {
    return {
        authedUserID: authedUser,
        questions
    }
}

export default connect(mapStateToProps)(Questions)