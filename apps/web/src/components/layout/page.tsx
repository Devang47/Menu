import { useAppStore } from '~/context/use-app-store'
import LoadingScreen from '../common/LoadingScreen'

type Props = {
  children?: React.ReactNode

  // TODO after implementing header, footer
  // headerProps?: HeaderProps
  // footerProps?: FooterProps
}

export const PageLayout = ({ children }: Props) => {
  return (
    <>
      {useAppStore().isLoading && <LoadingScreen />}
      {/* TODO Header */}
      {/* <Header /> */}
      <main>{children}</main>
      {/* TODO Footer */}
      {/* <Footer /> */}
    </>
  )
}
