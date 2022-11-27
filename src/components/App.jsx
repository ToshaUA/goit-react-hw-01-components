import { Profile } from './Profile';
import { Statistics } from './Statistics';
import { FriendList } from './FriendList';
import { TransactionHistory } from './TransactionHistory';
import { StatisticsContainer } from 'style/Statistics.styled';
import { ProfileContainer } from 'style/Profile.styled';
import { FriendContainer } from 'style/FriendList.styled';
import { TransactionHictoryContainer } from '../style/TransactionHictory.styled';
import user from 'user.json';
import data from 'data.json';
import friends from 'friends.json';
import transactions from 'transactions.json';
import { GlobalStyle, Container } from 'style/Global.styled';

export const App = () => {
  return (
    <>
      <Container>
        <ProfileContainer>
          <Profile
            username={user.username}
            tag={user.tag}
            location={user.location}
            avatar={user.avatar}
            stats={user.stats}
          />
        </ProfileContainer>
        <StatisticsContainer>
          <Statistics title="Upload stats" stats={data} />
        </StatisticsContainer>
        <FriendContainer>
          <FriendList friends={friends} />
        </FriendContainer>
        <TransactionHictoryContainer>
          <TransactionHistory items={transactions} />
        </TransactionHictoryContainer>
        <GlobalStyle />
      </Container>
    </>
  );
};
