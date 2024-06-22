import react, { memo } from 'react';
import { View, Text, TextInput, Image, FlatList, StyleSheet, StatusBar, ImageBackground } from 'react-native';
import popularJobs from './popularJobs';

const JobItem = memo(({ job }) => (
  <View style={styles.jobItem}>
    <Image source={job.logo} style={styles.jobLogo} />
    <View style={styles.jobInfo}>
      <Text style={styles.jobTitle}>{job.title}</Text>
      <Text style={styles.jobCompany}>{job.company}</Text>
    </View>
    <View>
      <Text style={styles.jobSalary}>{job.salary}</Text>
      <Text style={styles.jobLocation}>{job.location}</Text>
    </View>
  </View>
));

const JobCard = memo(({item}) => (
  <ImageBackground source={require('./assets/Mask Group.png')} style={[styles.featuredJobItem, {backgroundColor: item.backgroundColor}]}>
    <View style={styles.featuredJob}>
      <View style={styles.featuredJobLogoContainer}>
        <Image source={item.logo} style={styles.featuredJobLogo} />
      </View>
      <View>
        <Text style={styles.featuredJobTitle}>{item.title}</Text>
        <Text style={styles.featuredJobCompany}>{item.company}</Text>
      </View>
    </View>
    <View style={styles.featuredJobDetails}>
      <Text style={styles.featuredJobSalary}>{item.salary}</Text>
      <Text style={styles.featuredJobLocation}>{item.location}</Text>
    </View>
  </ImageBackground>
));

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
            source={require('./assets/profile.png')} 
            style={styles.profileImage} 
          />
          <View style={styles.profileDotContainer}>
            <Image 
              source={require('./assets/profileDot.png')} 
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
              source={require('./assets/filter-icon.png')} 
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
  featuredJobItem: {
    width: 280,
    height: 186,
    backgroundColor: '#5386E4',
    borderRadius: 15,
    padding: 25,
    marginLeft: 10,
    overflow: 'hidden',
  },
  featuredJob: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  featuredJobLogoContainer: {
    width: 46,
    height: 46,
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    justifyContent: 'center',
    alignContent: 'center',
    marginRight: 15,
  },
  featuredJobLogo: {
    width: 23.57,
    height: 23.57,
    alignSelf: 'center'
  },
  featuredJobTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#FFF',
  },
  featuredJobCompany: {
    fontSize: 14,
    color: '#fff',
    marginBottom: 10,
  },
  featuredJobDetails: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 60,
  },
  featuredJobSalary: {
    fontSize: 14,
    color: '#fff',
  },
  featuredJobLocation: {
    fontSize: 14,
    color: '#fff',
  },
  jobItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    height: 74,
    padding: 15,
    marginHorizontal: 20,
    marginBottom: 10,
  },
  jobLogo: {
    width: 40,
    height: 40,
    // borderRadius: 20,
    marginRight: 15,
  },
  jobInfo: {
    flex: 1,
  },
  jobTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 3,
    lineHeight: 19.2
  },
  jobCompany: {
    fontSize: 14,
    color: '#666',
    lineHeight: 20.8

  },
  jobSalary: {
    fontSize: 14,
    fontWeight: '600',
    alignSelf: 'flex-end',
    color: '#0D0D26',
    marginBottom: 3,
    lineHeight: 19.2
  },
  jobLocation: {
    fontSize: 14,
    color: '#0D0D26',
    lineHeight: 20.8
  },
});

export default Home;
