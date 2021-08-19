import React, { Component } from 'react';
import Statistics from './components/Statistics';
import FeedBackOptions from './components/FeedBackOptions';
import Section from './components/Section';
import Notification from './components/Notification';
import './App.css';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  onLeaveFeedback = e => {
    this.setState(prevState => ({
      [e.target.name]: prevState[e.target.name] + 1,
    }));
  };
  countTotalFeedback(good, neutral, bad) {
    const total = good + neutral + bad;
    return total;
  }
  countPositiveFeedbackPercentage(good, neutral, bad) {
    const positivePercentage =
      (good / this.countTotalFeedback(good, neutral, bad)) * 100;

    return Math.round(positivePercentage);
  }

  render() {
    const { good, neutral, bad } = this.state;
    const options = this.state;
    const total = this.countTotalFeedback;
    const positivePercentage = this.countPositiveFeedbackPercentage.bind(this);

    return (
      <>
        <Section title="Please leave Feedback">
          <FeedBackOptions
            options={options}
            onLeaveFeedback={this.onLeaveFeedback}
          />
        </Section>

        {total(good, neutral, bad) ? (
          <Section title="Statistics">
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={total}
              positivePercentage={positivePercentage}
            />
          </Section>
        ) : (
          <Notification message="No feedback given" />
        )}
      </>
    );
  }
}

export default App;
