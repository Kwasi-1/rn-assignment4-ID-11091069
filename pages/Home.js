import react, { memo } from 'react';
import { View, Text, TextInput, Image, FlatList, StyleSheet, StatusBar, ImageBackground } from 'react-native';
import popularJobs from '../popularJobs';
import JobCard from '../component/JobCard';
import JobItem from '../component/JobItem';

const featuredJobs = popularJobs.slice(3);

const Home = ({ route }) => {
  const { name, email } = route.params;

  const renderHeader = () => (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.headerInfo}>
          <Text style={styles.name}>{name || 'Eric Astu'}</Text>
          <Text style={styles.email}>{email || 'ericatsu@gmail.com'}</Text>
        </View>
        <View>
          <Image 
            source={require('../assets/profile.png')} 
            style={styles.profileImage} 
          />
          <View style={styles.profileDotContainer}>
            <Image 
              source={require('../assets/profileDot.png')} 
              style={styles.profileDot} 
            />
          </View>
        </View>
      </View>
      <View style={styles.searchContainer}>
        <TextInput
          style={styles.searchInput}
          placeholder="Search a job or position"
          placeholderTextColor="#95969D"
        />
        <View style={styles.searchFilter}>
          <Image 
              source={require('../assets/filter-icon.png')} 
              style={styles.filterIcon} 
            />
        </View>
      </View>
      <View style={styles.jobsSection}>
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Featured Jobs</Text>
          <Text style={styles.sectionSubtitle}>See all</Text>
        </View>
        <FlatList
          data={featuredJobs}
          horizontal
          keyExtractor={item => item.id}
          renderItem={({ item }) => <JobCard item={item}/>}
          showsHorizontalScrollIndicator={false}
        />
      </View>
      <View style={styles.sectionHeader}>
        <Text style={styles.sectionTitle}>Popular Jobs</Text>
      </View>
    </View>
  );

  return (
    <View style={{ flex: 1 }}>
      <StatusBar
        barStyle="dark-content"
        backgroundColor="#FAFAFD"
      />
      <FlatList
        data={popularJobs}
        keyExtractor={item => item.id}
        renderItem={({ item }) => <JobItem job={item} />}
        ListHeaderComponent={renderHeader}
        
        style = {{backgroundColor: '#FAFAFD'}}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FAFAFD',
    // padding: 20,
    paddingTop: 50,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    justifyContent: 'space-between',
    paddingHorizontal: 20,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    lineHeight: 36,
    flex: 1,
  },
  email: {
    fontSize: 20,
    color: '#666',
    flex: 1,
  },
  profileImage: {
    width: 54,
    height: 54,
    borderRadius: 27,
  },
  profileDotContainer:{
    padding: 4,
    backgroundColor: '#fff',
    position: 'absolute',
    top:5,
    right: 0,
    borderRadius: 11
  },
  profileDot:{
    width: 8,
    height: 8,
  },
  searchContainer: {
    flexDirection: 'row',
    marginBottom: 20,
    paddingHorizontal: 20,
  },
  searchInput: {
    flex: 1,
    height: 48,
    backgroundColor: '#F2F2F3',
    borderColor: '#F2F2F3',
    borderWidth: 1,
    borderRadius: 14,
    paddingHorizontal: 15,
  },
  searchFilter:{
    height: 48,
    width: 48,
    marginLeft: 20,
    backgroundColor: '#F2F2F3',
    padding: 8,
    borderRadius: 14,
    justifyContent: 'center'
  },
  filterIcon: {
    height: 28,
    width: 28,
    alignSelf: 'center'
  },
  jobsSection: {
    marginBottom: 20,
    marginTop: 20,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
    paddingHorizontal: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  sectionSubtitle: {
    fontSize: 14,
    color: '#95969D',
  },
  
});

export default Home;
