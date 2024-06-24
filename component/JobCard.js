import { Image, ImageBackground, View, Text , StyleSheet } from 'react-native';
import { memo } from 'react';

const JobCard = memo(({item}) => (
  <ImageBackground source={require('../assets/Mask Group.png')} style={[styles.featuredJobItem, {backgroundColor: item.backgroundColor}]}>
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

const styles = StyleSheet.create({
  featuredJobItem: {
    width: 280,
    height: 186,
    backgroundColor: '#5386E4',
    borderRadius: 15,
    padding: 25,
    marginLeft: 10,
    marginRight: 3,
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
})

export default JobCard;