import {
  useSelector,
  useDispatch
} from "react-redux"

import {toggleTheme} from "../redux/themeSlice"

const ThemeToggle = () => {

  // ACCESS STATE
  const darkMode =useSelector((state) => state.theme.darkMode)

  // DISPATCH
  const dispatch = useDispatch()

  return (

    <div
      className={`
      min-h-screen
      flex
      flex-col
      items-center
      justify-center
      transition-all
      duration-500

      ${
        darkMode
          ? "bg-black text-white"
          : "bg-white text-black"
      }
      `}
    >

      <h1 className="text-4xl font-bold mb-6">

        {
          darkMode
            ? "Dark Mode"
            : "Light Mode"
        }

      </h1>

      <button
        onClick={() =>
          dispatch(toggleTheme())
        }

        className="
        px-6
        py-3
        rounded-lg
        bg-blue-500
        text-white
        hover:bg-blue-600
        "
      >

        Toggle Theme

      </button>

    </div>
  )
}

export default ThemeToggle