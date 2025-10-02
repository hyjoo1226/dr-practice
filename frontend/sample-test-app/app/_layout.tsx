// import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { NavigationContainer } from '@react-navigation/native';
import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import 'react-native-reanimated';
import { SafeAreaView } from 'react-native-safe-area-context';

// import { useColorScheme } from '@/hooks/use-color-scheme';

export const unstable_settings = {
  anchor: '(tabs)', // 앱 초기 진입 화면이 (tabs) 폴더 내 탭 네비게이션임을 지정
};

export default function RootLayout() {
  // const colorScheme = useColorScheme();

  return (
    <NavigationContainer>
      {/* <SafeAreaView> */}
        {/* 인증 화면(로그인/회원가입) - 상단 헤더 - 탭 네비게이터 - 모달 뷰(팝업, 알림 등)*/}
        <Stack>
          <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
          <Stack.Screen name="modal" options={{ presentation: 'modal', title: 'Modal' }} />
        </Stack>
        <StatusBar style="auto" />
      {/* </SafeAreaView> */}
    </NavigationContainer>
  );
}
