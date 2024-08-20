import { View, ScrollView } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import styles from './defaultCSS';

const Index = ({ children }) => {
    return (
        <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
            <View style={styles.container}>
                <LinearGradient style={styles.background} useAngle={true} angle={45} angleCenter={{ x: 0.5, y: 0.35 }} end={{ x: 1, y: 0 }} colors={styles.background.colorList}>
                    <View>
                        {children}
                    </View>
                </LinearGradient>
            </View>
        </ScrollView>
    );
};


export default Index;
